selector_to_html = {"a[href=\"#saml2-saml2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SAML2&lt;-&gt;SAML2<a class=\"headerlink\" href=\"#saml2-saml2\" title=\"Link to this heading\">#</a></h2><p>There are SAML2 service providers for example Box which is not able to handle\nmultiple identity providers. For more information about how to set up,\nconfigure and run such a proxy instance please visit <a class=\"reference internal\" href=\"#doc/one-to-many.md\"><span class=\"xref myst\">Single Service\nProvider&lt;-&gt;Multiple Identity providers</span></a></p><p>If an identity provider can not communicate with service providers in for\nexample a federation, they can convert requests and make the communication\npossible.</p>", "a[href=\"#saml2-social-logins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SAML2&lt;-&gt;Social logins<a class=\"headerlink\" href=\"#saml2-social-logins\" title=\"Link to this heading\">#</a></h2><p>This setup makes it possible to connect a SAML2 service provider to multiple\nsocial media identity providers such as Google and Facebook. The proxy makes it\npossible to mirror an identity provider by generating SAML2 metadata\ncorresponding to that provider and create dynamic endpoints which are connected to\na single identity provider.</p><p>For more information about how to set up, configure and run such a proxy\ninstance please read <a class=\"reference internal\" href=\"#doc/SAML2-to-Social_logins.md\"><span class=\"xref myst\">SAML2&lt;-&gt;Social logins</span></a></p>", "a[href=\"#saml2-oidc\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SAML2&lt;-&gt;OIDC<a class=\"headerlink\" href=\"#saml2-oidc\" title=\"Link to this heading\">#</a></h2><p>The proxy is able to act as a proxy between a SAML2 service provider and a\nOpenID connect provider <a class=\"reference internal\" href=\"#doc/saml2-to-oidc.md\"><span class=\"xref myst\">SAML2&lt;-&gt;OIDC</span></a></p>", "a[href=\"#contact\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Contact<a class=\"headerlink\" href=\"#contact\" title=\"Link to this heading\">#</a></h1><p>If you have any questions regarding operations/deployment of SATOSA please use\nthe satosa-users <a class=\"reference external\" href=\"https://lists.sunet.se/postorius/lists/idpy-discuss.lists.sunet.se/\">mailing list</a>.</p>", "a[href=\"#use-cases\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use cases<a class=\"headerlink\" href=\"#use-cases\" title=\"Link to this heading\">#</a></h1><p>In this section a set of use cases for the proxy is presented.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
