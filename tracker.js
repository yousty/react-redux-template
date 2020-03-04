/* eslint-disable no-console */
import GATracker from 'react-ga';
import { TRACKING_ID, NODE_ENV } from "../constants"

class Tracker {
  constructor() {
    GATracker.initialize(TRACKING_ID, {
      debug: NODE_ENV === 'development',
    });
  }

  trackEvent = ({ action, label }) => {
    GATracker.event({
      category: 'PROJECT_NAME',
      action,
      label,
    });
  };

  trackPageView = ({ route = "", action }) => {
    GATracker.event({
      category: 'PROJECT_NAME',
      action,
    });
    GATracker.pageview(`/${route}`);
  };
}

class DevTracker {
  constructor() {
    console.log('Spinning up dev tracker');
  }

  trackEvent = ({ action, label }) => {
    console.log('tracking action', action, 'with label', label);
  };

  trackPageView = ({ route = "", action }) => {
    console.log('tracking pageview on route', route, 'with action', action);
  };
}

const radarTracker = NODE_ENV === 'production' ? new Tracker() : new DevTracker();

export default radarTracker;
