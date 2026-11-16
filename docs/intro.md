# Get Started

## Installation

### Docker

A pre-built Docker image is accessible at the [Docker Hub](https://hub.docker.com/_/satosa), and is the
recommended ways of running the proxy.

## Manual installation

### Dependencies

SATOSA requires Python 3.4 (or above), and the following packages on Ubuntu:

```bash
apt-get install libffi-dev libssl-dev xmlsec1
````

### Instructions

1. Download the SATOSA proxy project as a [compressed archive](https://github.com/IdentityPython/SATOSA/releases)
   and unpack it to `<satosa_path>`.

2. Install the application:

   ```bash
   pip install <satosa_path>
   ```

Alternatively the application can be installed directly from PyPI (`pip install satosa`), or the [Docker image](https://hub.docker.com/_/satosa) can be used.

# Configuration

SATOSA is configured using YAML.

All default configuration files, as well as an example WSGI application for the proxy, can be found
in the [example directory](../example).

The default YAML syntax is extended to include the capability to resolve
environment variables. The following tags are used to achieve this:

* The `!ENV` tag

The `!ENV` tag is followed by a string that denotes the environment variable
name. It will be replaced by the value of the environment variable with the
same name.

In the example below `LDAP_BIND_PASSWORD` will, at runtime, be replaced with
the value from the process environment variable of the same name. If the
process environment has been set with `LDAP_BIND_PASSWORD=secret_password` then
the configuration value for `bind_password` will be `secret_password`.

```yaml
bind_password: !ENV LDAP_BIND_PASSWORD
```

* The `!ENVFILE` tag

The `!ENVFILE` tag is followed by a string that denotes the environment
variable name. It will be replaced by the value of the environment variable
with the same name.

In the example below `LDAP_BIND_PASSWORD_FILE` will, at runtime, be replaced
with the value from the process environment variable of the same name. If the
process environment has been set with
`LDAP_BIND_PASSWORD_FILE=/etc/satosa/secrets/ldap.txt` then the configuration
value for `bind_password` will be `secret_password`.

```yaml
bind_password: !ENVFILE LDAP_BIND_PASSWORD_FILE
```

## SATOSA proxy configuration: `proxy_conf.yaml.example`

| Parameter name | Data type | Example value | Description |
| -------------- | --------- | ------------- | ----------- |
| `BASE` | string | `https://proxy.example.com` | base url of the proxy |
| `COOKIE_STATE_NAME` | string | `satosa_state` | name of the cookie SATOSA uses for preserving state between requests |
| `COOKIE_SECURE` | bool | `True` | whether to include the cookie only when the request is transmitted over a secure channel |
| `COOKIE_HTTPONLY` | bool | `True` | whether the cookie should only be accessed only by the server |
| `COOKIE_SAMESITE` | string | `"None"` | whether the cookie should only be sent with requests initiated from the same registrable domain |
| `COOKIE_MAX_AGE` | string | `"1200"` | indicates the maximum lifetime of the cookie represented as the number of seconds until the cookie expires |
| `CONTEXT_STATE_DELETE` | bool | `True` | controls whether SATOSA will delete the state cookie after receiving the authentication response from the upstream IdP|
| `STATE_ENCRYPTION_KEY` | string | `52fddd3528a44157` | key used for encrypting the state cookie, will be overridden by the environment variable `SATOSA_STATE_ENCRYPTION_KEY` if it is set |
| `INTERNAL_ATTRIBUTES` | string | `example/internal_attributes.yaml` | path to attribute mapping
| `CUSTOM_PLUGIN_MODULE_PATHS` | string[] | `[example/plugins/backends, example/plugins/frontends]` | list of directory paths containing any front-/backend plugin modules |
| `BACKEND_MODULES` | string[] | `[openid_connect_backend.yaml, saml2_backend.yaml]` | list of plugin configuration file paths, describing enabled backends |
| `FRONTEND_MODULES` | string[] | `[saml2_frontend.yaml, openid_connect_frontend.yaml]` | list of plugin configuration file paths, describing enabled frontends |
| `MICRO_SERVICES` | string[] | `[statistics_service.yaml]` | list of plugin configuration file paths, describing enabled microservices |
| `LOGGING` | dict | see [Python logging.conf](https://docs.python.org/3/library/logging.config.html) | optional configuration of application logging |
