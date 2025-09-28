#!/usr/bin/env python3
"""
Comprehensive Backend Health Check for Sandeep's Portfolio Website
Tests all API endpoints, database connectivity, email integration, and service health
"""

import requests
import json
import time
from datetime import datetime
import sys
import os

# Load environment variables to get the backend URL
def load_frontend_env():
    """Load frontend .env file to get REACT_APP_BACKEND_URL"""
    env_path = "/app/frontend/.env"
    env_vars = {}
    try:
        with open(env_path, 'r') as f:
            for line in f:
                if '=' in line and not line.strip().startswith('#'):
                    key, value = line.strip().split('=', 1)
                    env_vars[key] = value.strip('"')
        return env_vars
    except Exception as e:
        print(f"Error loading frontend .env: {e}")
        return {}

# Get backend URL from frontend environment
frontend_env = load_frontend_env()
BACKEND_URL = frontend_env.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE_URL = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE_URL}")
print("=" * 80)

class BackendHealthChecker:
    def __init__(self):
        self.results = {
            'api_endpoints': {},
            'database_connectivity': {},
            'email_integration': {},
            'service_health': {},
            'security_config': {}
        }
        self.session = requests.Session()
        self.session.timeout = 30
        
    def test_api_endpoints(self):
        """Test all API endpoints"""
        print("\n1. API ENDPOINTS HEALTH CHECK")
        print("-" * 40)
        
        # Test GET /api/ (hello world endpoint)
        try:
            response = self.session.get(f"{API_BASE_URL}/")
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    print("✅ GET /api/ - Hello World endpoint working")
                    self.results['api_endpoints']['hello_world'] = {'status': 'pass', 'response': data}
                else:
                    print(f"❌ GET /api/ - Unexpected response: {data}")
                    self.results['api_endpoints']['hello_world'] = {'status': 'fail', 'error': f'Unexpected response: {data}'}
            else:
                print(f"❌ GET /api/ - Status code: {response.status_code}")
                self.results['api_endpoints']['hello_world'] = {'status': 'fail', 'error': f'Status code: {response.status_code}'}
        except Exception as e:
            print(f"❌ GET /api/ - Connection error: {str(e)}")
            self.results['api_endpoints']['hello_world'] = {'status': 'fail', 'error': str(e)}
        
        # Test POST /api/contact (contact form submission)
        try:
            contact_data = {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Test Contact Form",
                "message": "This is a test message from the backend health check."
            }
            response = self.session.post(f"{API_BASE_URL}/contact", json=contact_data)
            if response.status_code == 200:
                data = response.json()
                if all(key in data for key in ['id', 'name', 'email', 'subject', 'message', 'timestamp']):
                    print("✅ POST /api/contact - Contact form submission working")
                    self.results['api_endpoints']['contact_post'] = {'status': 'pass', 'response': data}
                else:
                    print(f"❌ POST /api/contact - Missing fields in response: {data}")
                    self.results['api_endpoints']['contact_post'] = {'status': 'fail', 'error': f'Missing fields: {data}'}
            else:
                print(f"❌ POST /api/contact - Status code: {response.status_code}, Response: {response.text}")
                self.results['api_endpoints']['contact_post'] = {'status': 'fail', 'error': f'Status code: {response.status_code}'}
        except Exception as e:
            print(f"❌ POST /api/contact - Error: {str(e)}")
            self.results['api_endpoints']['contact_post'] = {'status': 'fail', 'error': str(e)}
        
        # Test GET /api/contact (admin endpoint for viewing messages)
        try:
            response = self.session.get(f"{API_BASE_URL}/contact")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    print(f"✅ GET /api/contact - Admin endpoint working, found {len(data)} messages")
                    self.results['api_endpoints']['contact_get'] = {'status': 'pass', 'message_count': len(data)}
                else:
                    print(f"❌ GET /api/contact - Expected list, got: {type(data)}")
                    self.results['api_endpoints']['contact_get'] = {'status': 'fail', 'error': f'Expected list, got {type(data)}'}
            else:
                print(f"❌ GET /api/contact - Status code: {response.status_code}")
                self.results['api_endpoints']['contact_get'] = {'status': 'fail', 'error': f'Status code: {response.status_code}'}
        except Exception as e:
            print(f"❌ GET /api/contact - Error: {str(e)}")
            self.results['api_endpoints']['contact_get'] = {'status': 'fail', 'error': str(e)}
        
        # Test CORS configuration
        try:
            headers = {'Origin': 'https://example.com'}
            response = self.session.options(f"{API_BASE_URL}/", headers=headers)
            cors_headers = response.headers
            if 'Access-Control-Allow-Origin' in cors_headers:
                print("✅ CORS - Configuration present")
                self.results['api_endpoints']['cors'] = {'status': 'pass', 'headers': dict(cors_headers)}
            else:
                print("❌ CORS - No CORS headers found")
                self.results['api_endpoints']['cors'] = {'status': 'fail', 'error': 'No CORS headers'}
        except Exception as e:
            print(f"❌ CORS - Error testing: {str(e)}")
            self.results['api_endpoints']['cors'] = {'status': 'fail', 'error': str(e)}
    
    def test_database_connectivity(self):
        """Test database operations through API endpoints"""
        print("\n2. DATABASE CONNECTIVITY CHECK")
        print("-" * 40)
        
        # Test database insert via contact form
        try:
            test_contact = {
                "name": "Database Test User",
                "email": "dbtest@example.com",
                "subject": "Database Connectivity Test",
                "message": "Testing database insert operation via API"
            }
            response = self.session.post(f"{API_BASE_URL}/contact", json=test_contact)
            if response.status_code == 200:
                print("✅ Database Insert - Contact message saved successfully")
                self.results['database_connectivity']['insert'] = {'status': 'pass'}
            else:
                print(f"❌ Database Insert - Failed with status: {response.status_code}")
                self.results['database_connectivity']['insert'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Database Insert - Error: {str(e)}")
            self.results['database_connectivity']['insert'] = {'status': 'fail', 'error': str(e)}
        
        # Test database read via contact messages endpoint
        try:
            response = self.session.get(f"{API_BASE_URL}/contact")
            if response.status_code == 200:
                messages = response.json()
                if isinstance(messages, list):
                    print(f"✅ Database Read - Retrieved {len(messages)} contact messages")
                    self.results['database_connectivity']['read'] = {'status': 'pass', 'count': len(messages)}
                else:
                    print("❌ Database Read - Invalid response format")
                    self.results['database_connectivity']['read'] = {'status': 'fail', 'error': 'Invalid format'}
            else:
                print(f"❌ Database Read - Failed with status: {response.status_code}")
                self.results['database_connectivity']['read'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Database Read - Error: {str(e)}")
            self.results['database_connectivity']['read'] = {'status': 'fail', 'error': str(e)}
        
        # Test status check endpoints for additional database verification
        try:
            status_data = {"client_name": "Health Check Test"}
            response = self.session.post(f"{API_BASE_URL}/status", json=status_data)
            if response.status_code == 200:
                print("✅ Database Status Collection - Insert working")
                self.results['database_connectivity']['status_insert'] = {'status': 'pass'}
            else:
                print(f"❌ Database Status Collection - Insert failed: {response.status_code}")
                self.results['database_connectivity']['status_insert'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Database Status Collection - Error: {str(e)}")
            self.results['database_connectivity']['status_insert'] = {'status': 'fail', 'error': str(e)}
    
    def test_email_integration(self):
        """Test email functionality"""
        print("\n3. EMAIL INTEGRATION CHECK")
        print("-" * 40)
        
        # Test email sending via contact form
        try:
            email_test_data = {
                "name": "Email Test User",
                "email": "emailtest@example.com",
                "subject": "Email Integration Test",
                "message": "This is a test to verify email sending functionality."
            }
            response = self.session.post(f"{API_BASE_URL}/contact", json=email_test_data)
            if response.status_code == 200:
                print("✅ Email Integration - Contact form processed (email sending attempted)")
                print("   Note: Email success depends on SMTP configuration and credentials")
                self.results['email_integration']['smtp_test'] = {'status': 'pass', 'note': 'Email attempted via contact form'}
            else:
                print(f"❌ Email Integration - Contact form failed: {response.status_code}")
                self.results['email_integration']['smtp_test'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Email Integration - Error: {str(e)}")
            self.results['email_integration']['smtp_test'] = {'status': 'fail', 'error': str(e)}
        
        # Check environment variables for email configuration
        try:
            backend_env_path = "/app/backend/.env"
            email_config = {}
            with open(backend_env_path, 'r') as f:
                for line in f:
                    if 'EMAIL' in line and '=' in line:
                        key, value = line.strip().split('=', 1)
                        email_config[key] = value.strip('"')
            
            if 'EMAIL_FROM' in email_config and 'EMAIL_PASSWORD' in email_config:
                print("✅ Email Configuration - Environment variables present")
                self.results['email_integration']['config'] = {'status': 'pass', 'variables': list(email_config.keys())}
            else:
                print("❌ Email Configuration - Missing environment variables")
                self.results['email_integration']['config'] = {'status': 'fail', 'error': 'Missing EMAIL_FROM or EMAIL_PASSWORD'}
        except Exception as e:
            print(f"❌ Email Configuration - Error reading config: {str(e)}")
            self.results['email_integration']['config'] = {'status': 'fail', 'error': str(e)}
    
    def test_service_health(self):
        """Test service health and performance"""
        print("\n4. SERVICE HEALTH CHECK")
        print("-" * 40)
        
        # Test response time
        try:
            start_time = time.time()
            response = self.session.get(f"{API_BASE_URL}/")
            end_time = time.time()
            response_time = (end_time - start_time) * 1000  # Convert to milliseconds
            
            if response.status_code == 200:
                print(f"✅ Response Time - {response_time:.2f}ms")
                if response_time < 1000:
                    print("✅ Performance - Good response time (<1s)")
                    self.results['service_health']['performance'] = {'status': 'pass', 'response_time_ms': response_time}
                else:
                    print("⚠️  Performance - Slow response time (>1s)")
                    self.results['service_health']['performance'] = {'status': 'warning', 'response_time_ms': response_time}
            else:
                print(f"❌ Service Health - Server not responding properly: {response.status_code}")
                self.results['service_health']['performance'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Service Health - Connection error: {str(e)}")
            self.results['service_health']['performance'] = {'status': 'fail', 'error': str(e)}
        
        # Test multiple endpoints to verify service stability
        endpoints_to_test = ["/", "/contact", "/status"]
        stable_endpoints = 0
        
        for endpoint in endpoints_to_test:
            try:
                if endpoint == "/contact" or endpoint == "/status":
                    response = self.session.get(f"{API_BASE_URL}{endpoint}")
                else:
                    response = self.session.get(f"{API_BASE_URL}{endpoint}")
                
                if response.status_code == 200:
                    stable_endpoints += 1
            except:
                pass
        
        if stable_endpoints == len(endpoints_to_test):
            print(f"✅ Service Stability - All {len(endpoints_to_test)} endpoints responding")
            self.results['service_health']['stability'] = {'status': 'pass', 'stable_endpoints': stable_endpoints}
        else:
            print(f"❌ Service Stability - Only {stable_endpoints}/{len(endpoints_to_test)} endpoints responding")
            self.results['service_health']['stability'] = {'status': 'fail', 'stable_endpoints': stable_endpoints}
    
    def test_security_config(self):
        """Test security and configuration"""
        print("\n5. SECURITY & CONFIGURATION CHECK")
        print("-" * 40)
        
        # Test input validation
        try:
            invalid_contact = {
                "name": "",  # Empty name
                "email": "invalid-email",  # Invalid email
                "subject": "",  # Empty subject
                "message": ""  # Empty message
            }
            response = self.session.post(f"{API_BASE_URL}/contact", json=invalid_contact)
            if response.status_code == 422:  # Validation error expected
                print("✅ Input Validation - Properly rejecting invalid data")
                self.results['security_config']['validation'] = {'status': 'pass'}
            elif response.status_code == 200:
                print("⚠️  Input Validation - Accepting invalid data (potential issue)")
                self.results['security_config']['validation'] = {'status': 'warning', 'note': 'Accepts invalid data'}
            else:
                print(f"❌ Input Validation - Unexpected response: {response.status_code}")
                self.results['security_config']['validation'] = {'status': 'fail', 'error': f'Status: {response.status_code}'}
        except Exception as e:
            print(f"❌ Input Validation - Error: {str(e)}")
            self.results['security_config']['validation'] = {'status': 'fail', 'error': str(e)}
        
        # Check environment configuration
        try:
            backend_env_path = "/app/backend/.env"
            env_vars = []
            with open(backend_env_path, 'r') as f:
                for line in f:
                    if '=' in line and not line.strip().startswith('#'):
                        key = line.strip().split('=')[0]
                        env_vars.append(key)
            
            required_vars = ['MONGO_URL', 'DB_NAME', 'EMAIL_FROM', 'EMAIL_PASSWORD']
            missing_vars = [var for var in required_vars if var not in env_vars]
            
            if not missing_vars:
                print("✅ Environment Configuration - All required variables present")
                self.results['security_config']['env_config'] = {'status': 'pass', 'variables': env_vars}
            else:
                print(f"❌ Environment Configuration - Missing variables: {missing_vars}")
                self.results['security_config']['env_config'] = {'status': 'fail', 'missing': missing_vars}
        except Exception as e:
            print(f"❌ Environment Configuration - Error: {str(e)}")
            self.results['security_config']['env_config'] = {'status': 'fail', 'error': str(e)}
    
    def run_all_tests(self):
        """Run all health checks"""
        print("BACKEND HEALTH CHECK FOR SANDEEP'S PORTFOLIO WEBSITE")
        print("=" * 80)
        print(f"Timestamp: {datetime.now().isoformat()}")
        print(f"Backend URL: {API_BASE_URL}")
        
        self.test_api_endpoints()
        self.test_database_connectivity()
        self.test_email_integration()
        self.test_service_health()
        self.test_security_config()
        
        return self.results
    
    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 80)
        print("HEALTH CHECK SUMMARY")
        print("=" * 80)
        
        total_tests = 0
        passed_tests = 0
        failed_tests = 0
        warning_tests = 0
        
        for category, tests in self.results.items():
            print(f"\n{category.upper().replace('_', ' ')}:")
            for test_name, result in tests.items():
                total_tests += 1
                status = result.get('status', 'unknown')
                if status == 'pass':
                    print(f"  ✅ {test_name}")
                    passed_tests += 1
                elif status == 'warning':
                    print(f"  ⚠️  {test_name}")
                    warning_tests += 1
                else:
                    print(f"  ❌ {test_name}: {result.get('error', 'Unknown error')}")
                    failed_tests += 1
        
        print(f"\nOVERALL RESULTS:")
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Warnings: {warning_tests}")
        print(f"Failed: {failed_tests}")
        
        if failed_tests == 0:
            print("\n🎉 ALL CRITICAL TESTS PASSED - Backend is healthy!")
        else:
            print(f"\n⚠️  {failed_tests} CRITICAL ISSUES FOUND - Needs attention before deployment")
        
        return {
            'total': total_tests,
            'passed': passed_tests,
            'warnings': warning_tests,
            'failed': failed_tests,
            'healthy': failed_tests == 0
        }

if __name__ == "__main__":
    checker = BackendHealthChecker()
    results = checker.run_all_tests()
    summary = checker.print_summary()
    
    # Save detailed results to file
    with open('/app/backend_health_report.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'backend_url': API_BASE_URL,
            'summary': summary,
            'detailed_results': results
        }, f, indent=2)
    
    print(f"\nDetailed results saved to: /app/backend_health_report.json")
    
    # Exit with appropriate code
    sys.exit(0 if summary['healthy'] else 1)