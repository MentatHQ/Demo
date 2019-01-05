import React from 'react';
import { Redirect } from 'react-router-dom';
import Welcome from './Welcome';
import AgentHome from './AgentHome';
import AgentSignin from './AgentSignin';
import AgentSignup from './AgentSignup';
import AgentTasks from './AgentTasks';
import AgentSettings from './AgentSettings';

const AutoRedirect = url => {
  const NotFound = () => <Redirect to={ `${url}${window.location ? `?from=${encodeURIComponent(window.location.pathname)}` : ''}`} />;
  return NotFound;
}

export default [
  // Routes for users having an Mentat account
  {
    path: '/agent/signin',
    requireAccount: true,
    component: AgentSignin,
    exact: true,
    title: 'Agent Sign in',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/agent/tasks',
    component: AgentTasks,
    requireAccount: true,
    requireOnline: true,
    exact: true,
    title: 'Tasks',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/agent/settings',
    component: AgentSettings,
    requireAccount: true,
    requireOnline: true,
    title: 'Settings',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/',
    component: AgentHome,
    requireAccount: true,
    requireOnline: true,
    exact: true,
    title: 'Agent Home',
    description: '',
    socialText: '',
    image: ''
  },
  {
    component: AutoRedirect('/agent/signin'),
    requireAccount: true,
    exact: true,
    title: 'Agent Home',
    description: '',
    socialText: '',
    image: ''
  },


  // Visitor routes
  {
    path: '/agent/signup',
    component: AgentSignup,
    exact: true,
    title: 'Agent Sign up',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/',
    component: Welcome,
    exact: true,
    title: 'Home',
    description: '',
    socialText: '',
    image: ''
  },

  // 404 redirect
  {
    component: AutoRedirect('/'),
    byPassRequirements: true,
    title: 'Redirect...',
    description: '',
    socialText: '',
    image: ''
  },
];
