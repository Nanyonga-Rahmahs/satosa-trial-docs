selector_to_html = {"a[href=\"#docker\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Docker<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h3><p>A pre-built Docker image is accessible at the <a class=\"reference external\" href=\"https://hub.docker.com/_/satosa\">Docker Hub</a>, and is the\nrecommended ways of running the proxy.</p>", "a[href=\"#manual-installation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Manual installation<a class=\"headerlink\" href=\"#manual-installation\" title=\"Link to this heading\">#</a></h2><h3>Dependencies<a class=\"headerlink\" href=\"#dependencies\" title=\"Link to this heading\">#</a></h3><p>SATOSA requires Python 3.4 (or above), and the following packages on Ubuntu:</p>", "a[href=\"#configuration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuration<a class=\"headerlink\" href=\"#configuration\" title=\"Link to this heading\">#</a></h1><p>SATOSA is configured using YAML.</p><p>All default configuration files, as well as an example WSGI application for the proxy, can be found\nin the <a class=\"reference internal\" href=\"#../example\"><span class=\"xref myst\">example directory</span></a>.</p>", "a[href=\"#installation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">#</a></h2><h3>Docker<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h3><p>A pre-built Docker image is accessible at the <a class=\"reference external\" href=\"https://hub.docker.com/_/satosa\">Docker Hub</a>, and is the\nrecommended ways of running the proxy.</p>", "a[href=\"#get-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Get Started<a class=\"headerlink\" href=\"#get-started\" title=\"Link to this heading\">#</a></h1><h2>Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">#</a></h2><h3>Docker<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h3><p>A pre-built Docker image is accessible at the <a class=\"reference external\" href=\"https://hub.docker.com/_/satosa\">Docker Hub</a>, and is the\nrecommended ways of running the proxy.</p>", "a[href=\"#instructions\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Instructions<a class=\"headerlink\" href=\"#instructions\" title=\"Link to this heading\">#</a></h3><p>Alternatively the application can be installed directly from PyPI (<code class=\"docutils literal notranslate\"><span class=\"pre\">pip</span> <span class=\"pre\">install</span> <span class=\"pre\">satosa</span></code>), or the <a class=\"reference external\" href=\"https://hub.docker.com/_/satosa\">Docker image</a> can be used.</p>", "a[href=\"#satosa-proxy-configuration-proxy-conf-yaml-example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SATOSA proxy configuration: <code class=\"docutils literal notranslate\"><span class=\"pre\">proxy_conf.yaml.example</span></code><a class=\"headerlink\" href=\"#satosa-proxy-configuration-proxy-conf-yaml-example\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dependencies\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Dependencies<a class=\"headerlink\" href=\"#dependencies\" title=\"Link to this heading\">#</a></h3><p>SATOSA requires Python 3.4 (or above), and the following packages on Ubuntu:</p>"}
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
