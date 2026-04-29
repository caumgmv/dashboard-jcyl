window.MISMATCHES_CONFIG = {
  "thresholds": {
    "green": 95.0,
    "yellow": 50.0
  },
  "auth": {
    "enabled": false,
    "token_storage_key": "JWT_TOKEN",
    "operators_url": "https://jcylits.gmv.com/ocapi/api/operators",
    "renew_url": "https://jcylits.gmv.com/ocapi/api/login/renew"
  },
  "siri": {
    "enabled": true,
    "active_threshold_hours": 48.0
  },
  "ticketing": {
    "enabled": true,
    "validation_threshold_hours": 168.0
  }
};
