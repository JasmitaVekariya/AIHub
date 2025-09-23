import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { apiKeyAPI } from '../services/api';
import { 
  ArrowLeft, 
  User, 
  Key, 
  Plus, 
  Trash2, 
  Save, 
  Check,
  AlertCircle,
  Loader2,
  Settings,
  Shield,
  Mail,
  Calendar,
  LogOut,
  Star,
  Zap,
  Target
} from 'lucide-react';
import { FeatureSteps } from '../components/ui/feature-section';
import { BackgroundPaths } from '../components/BackgroundPaths';
import './ProfilePage.css';

const ProfilePageNew = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newApiKey, setNewApiKey] = useState({
    serviceName: 'ChatGPT',
    apiKey: ''
  });
  const [editingKey, setEditingKey] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const services = [
    { value: 'ChatGPT', label: 'ChatGPT', icon: '🤖', color: '#10a37f' },
    { value: 'Gemini', label: 'Gemini', icon: '💎', color: '#4285f4' },
    { value: 'Claude', label: 'Claude', icon: '⚡', color: '#ff6b35' },
    { value: 'DeepSeek', label: 'DeepSeek', icon: '🔍', color: '#6366f1' },
  ];

  // Feature steps data for the profile setup
  const profileFeatures = [
    {
      step: 'Step 1',
      title: 'Complete Your Profile',
      content: 'Set up your account information and preferences to get the most out of AIHub.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      step: 'Step 2',
      title: 'Add API Keys',
      content: 'Configure your AI service API keys to start chatting with different AI models.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      step: 'Step 3',
      title: 'Start Chatting',
      content: 'Begin your AI journey with powerful conversations and intelligent assistance.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  useEffect(() => {
    loadApiKeys();
  }, []);

  const loadApiKeys = async () => {
    try {
      setLoading(true);
      const response = await apiKeyAPI.getApiKeys();
      setApiKeys(response.data || []);
    } catch (error) {
      console.error('Error loading API keys:', error);
      setError('Failed to load API keys');
    } finally {
      setLoading(false);
    }
  };

  const handleAddApiKey = async (e) => {
    e.preventDefault();
    if (!newApiKey.apiKey.trim()) return;

    try {
      setLoading(true);
      setError('');
      const response = await apiKeyAPI.addApiKey(newApiKey);
      if (response.success) {
        setSuccess('API key added successfully!');
        setNewApiKey({ serviceName: 'ChatGPT', apiKey: '' });
        loadApiKeys();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(response.error || 'Failed to add API key');
      }
    } catch (error) {
      console.error('Error adding API key:', error);
      setError('Failed to add API key');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteApiKey = async (id) => {
    if (!window.confirm('Are you sure you want to delete this API key?')) return;

    try {
      setLoading(true);
      const response = await apiKeyAPI.deleteApiKey(id);
      if (response.success) {
        setSuccess('API key deleted successfully!');
        loadApiKeys();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(response.error || 'Failed to delete API key');
      }
    } catch (error) {
      console.error('Error deleting API key:', error);
      setError('Failed to delete API key');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <BackgroundPaths>
      <div className="profile-page-container">
        <div className="profile-page-content">
          <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <button
              className="btn btn-outline-secondary btn-sm mb-3"
              onClick={() => navigate('/')}
              style={{ 
                borderRadius: '25px',
                padding: '8px 20px'
              }}
            >
              <ArrowLeft size={16} className="me-2" />
              Back to Chat
            </button>
            <h1 className="display-4 fw-bold text-primary mb-3">Profile & Settings</h1>
            <p className="lead text-muted">Manage your account and AI service configurations</p>
          </div>

          {/* Feature Steps Section */}
          <div className="mb-5">
            <FeatureSteps
              features={profileFeatures}
              title="Getting Started with AIHub"
              autoPlayInterval={4000}
              imageHeight="h-400px"
            />
          </div>

          {/* User Profile Card */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="card bg-secondary border-primary shadow-lg" style={{ 
                borderRadius: '20px'
              }}>
                <div className="card-header border-primary p-4" style={{ 
                  background: 'transparent',
                  borderRadius: '20px 20px 0 0'
                }}>
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        background: 'var(--accent-color)'
                      }}
                    >
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-primary" style={{ 
                        fontWeight: '600'
                      }}>
                        User Profile
                      </h4>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.9rem' }}>
                        Your account information and preferences
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-tertiary rounded" style={{ 
                        borderRadius: '15px'
                      }}>
                        <Mail size={20} className="text-primary me-3" />
                        <div>
                          <small className="text-muted d-block">Email</small>
                          <span className="text-primary fw-medium">{user?.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-tertiary rounded" style={{ 
                        borderRadius: '15px'
                      }}>
                        <Calendar size={20} className="text-primary me-3" />
                        <div>
                          <small className="text-muted d-block">Member Since</small>
                          <span className="text-primary fw-medium">
                            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      className="btn btn-outline-danger d-flex align-items-center"
                      onClick={handleLogout}
                      style={{ 
                        borderRadius: '10px',
                        padding: '10px 20px'
                      }}
                    >
                      <LogOut size={16} className="me-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Keys Management */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card bg-secondary border-primary shadow-lg" style={{ 
                borderRadius: '20px'
              }}>
                <div className="card-header border-primary p-4" style={{ 
                  background: 'transparent',
                  borderRadius: '20px 20px 0 0'
                }}>
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        background: 'var(--accent-color)'
                      }}
                    >
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-primary" style={{ 
                        fontWeight: '600'
                      }}>
                        API Keys Management
                      </h4>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.9rem' }}>
                        Configure your AI service API keys securely
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  {/* Success/Error Messages */}
                  {success && (
                    <div className="alert alert-success d-flex align-items-center mb-4" style={{ 
                      borderRadius: '10px'
                    }}>
                      <Check size={20} className="me-2" />
                      {success}
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center mb-4" style={{ 
                      borderRadius: '10px'
                    }}>
                      <AlertCircle size={20} className="me-2" />
                      {error}
                    </div>
                  )}

                  {/* Add New API Key Form */}
                  <div className="mb-4 p-4 bg-tertiary" style={{ 
                    borderRadius: '15px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <h6 className="mb-3 text-primary" style={{ 
                      fontWeight: '600'
                    }}>
                      <Plus size={18} className="me-2" />
                      Add New API Key
                    </h6>
                    
                    <form onSubmit={handleAddApiKey}>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label fw-semibold text-primary">
                            Service Provider
                          </label>
                          <select
                            className="form-select"
                            value={newApiKey.serviceName}
                            onChange={(e) => setNewApiKey({ ...newApiKey, serviceName: e.target.value })}
                            disabled={loading}
                            style={{ 
                              borderRadius: '10px',
                              padding: '12px 15px'
                            }}
                          >
                            {services.map((service) => (
                              <option key={service.value} value={service.value}>
                                {service.icon} {service.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-primary">
                            API Key
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your API key securely..."
                            value={newApiKey.apiKey}
                            onChange={(e) => setNewApiKey({ ...newApiKey, apiKey: e.target.value })}
                            required
                            disabled={loading}
                            style={{ 
                              borderRadius: '10px',
                              padding: '12px 15px'
                            }}
                          />
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">&nbsp;</label>
                          <button
                            type="submit"
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                            disabled={loading || !newApiKey.apiKey.trim()}
                            style={{ 
                              borderRadius: '10px',
                              padding: '12px',
                              fontWeight: '600'
                            }}
                          >
                            {loading ? (
                              <Loader2 size={16} className="spinner-border-sm" />
                            ) : (
                              <Save size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Existing API Keys */}
                  <div>
                    <h6 className="mb-3 text-primary" style={{ 
                      fontWeight: '600'
                    }}>
                      <Key size={18} className="me-2" />
                      Your API Keys ({apiKeys.length})
                    </h6>
                    
                    {loading && apiKeys.length === 0 ? (
                      <div className="text-center py-4">
                        <Loader2 size={32} className="spinner-border text-primary" />
                        <p className="text-muted mt-2">Loading API keys...</p>
                      </div>
                    ) : apiKeys.length === 0 ? (
                      <div className="text-center py-4">
                        <Key size={48} className="text-muted mb-3" />
                        <p className="text-muted">No API keys configured yet</p>
                        <small className="text-muted">Add your first API key above to get started</small>
                      </div>
                    ) : (
                      <div className="row g-3">
                        {apiKeys.map((key) => (
                          <div key={key.id} className="col-md-6">
                            <div className="p-3 bg-tertiary border border-primary rounded" style={{ 
                              borderRadius: '12px'
                            }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <div 
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ 
                                      width: '32px', 
                                      height: '32px',
                                      backgroundColor: services.find(s => s.value === key.serviceName)?.color || '#6c757d'
                                    }}
                                  >
                                    <span style={{ fontSize: '14px' }}>
                                      {services.find(s => s.value === key.serviceName)?.icon || '🔑'}
                                    </span>
                                  </div>
                                  <div>
                                    <h6 className="mb-0 text-primary" style={{ fontSize: '0.9rem' }}>
                                      {key.serviceName}
                                    </h6>
                                    <small className="text-muted">
                                      {key.apiKey ? '••••••••' + key.apiKey.slice(-4) : 'No key'}
                                    </small>
                                  </div>
                                </div>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleDeleteApiKey(key.id)}
                                  disabled={loading}
                                  style={{ 
                                    borderRadius: '6px',
                                    padding: '4px 8px'
                                  }}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </BackgroundPaths>
  );
};

export default ProfilePageNew;
