# Use cases

In this section a set of use cases for the proxy is presented.


## SAML2<->SAML2

There are SAML2 service providers for example Box which is not able to handle
multiple identity providers. For more information about how to set up,
configure and run such a proxy instance please visit [Single Service
Provider<->Multiple Identity providers](doc/one-to-many.md)

If an identity provider can not communicate with service providers in for
example a federation, they can convert requests and make the communication
possible.


## SAML2<->Social logins

This setup makes it possible to connect a SAML2 service provider to multiple
social media identity providers such as Google and Facebook. The proxy makes it
possible to mirror an identity provider by generating SAML2 metadata
corresponding to that provider and create dynamic endpoints which are connected to
a single identity provider.

For more information about how to set up, configure and run such a proxy
instance please read [SAML2<->Social logins](doc/SAML2-to-Social_logins.md)


## SAML2<->OIDC

The proxy is able to act as a proxy between a SAML2 service provider and a
OpenID connect provider [SAML2<->OIDC](doc/saml2-to-oidc.md)

# Contact

If you have any questions regarding operations/deployment of SATOSA please use
the satosa-users [mailing list](https://lists.sunet.se/postorius/lists/idpy-discuss.lists.sunet.se/).
