const badDeps = ['argon2-cffi==21.1.0', 'astroid==2.7.3', 'attrs==21.2.0', 'autopep8==1.5.7', 'backcall==0.2.0', 'backports.entry-points-selectable==1.1.0', 'bandit==1.7.0', 'bleach==4.1.0', 'certifi==2021.5.30', 'cffi==1.14.6', 'charset-normalizer==2.0.4', 'colorama==0.4.4', 'cryptography==3.4.8', 'debugpy==1.4.3', 'decorator==5.1.0', 'defusedxml==0.7.1', 'distlib==0.3.2', 'docutils==0.17.1', 'entrypoints==0.3', 'filelock==3.0.12', 'flake8==3.9.2', 'flake8-django==1.1.2', 'flake8-flask==0.9.3', 'gitdb==4.0.7', 'GitPython==3.1.18', 'idna==3.2', 'importlib-metadata==4.8.1', 'ipykernel==6.4.1', 'ipython==7.27.0', 'ipython-genutils==0.2.0', 'isort==5.9.3', 'jedi==0.18.0', 'jeepney==0.7.1', 'Jinja2==3.0.1', 'jsonschema==3.2.0', 'jupyter-client==7.0.2', 'jupyter-core==4.7.1', 'jupyterlab-pygments==0.1.2', 'keyring==23.2.1', 'lazy-object-proxy==1.6.0', 'MarkupSafe==2.0.1', 'matplotlib-inline==0.1.3', 'mccabe==0.6.1', 'mistune==0.8.4', 'mypy==0.910', 'mypy-extensions==0.4.3', 'nbclient==0.5.4', 'nbconvert==6.1.0', 'nbformat==5.1.3', 'nest-asyncio==1.5.1', 'notebook==6.4.3', 'packaging==21.0', 'pandocfilters==1.4.3', 'parso==0.8.2', 'pbr==5.6.0', 'pep8==1.7.1', 'pexpect==4.8.0', 'pickleshare==0.7.5', 'pipenv==2021.5.29', 'pkginfo==1.7.1', 'platformdirs==2.3.0', 'prometheus-client==0.11.0', 'prompt-toolkit==3.0.20', 'ptyprocess==0.7.0', 'pycodestyle==2.7.0', 'pycparser==2.20', 'pydocstyle==6.1.1', 'pyflakes==2.3.1', 'Pygments==2.10.0', 'pylama==7.7.1', 'pylint==2.10.2', 'pyparsing==2.4.7', 'pyrsistent==0.18.0', 'python-dateutil==2.8.2', 'PyYAML==5.4.1', 'pyzmq==22.2.1', 'r2c-py-ast==0.1.0b1', 'readme-renderer==29.0', 'requests==2.26.0', 'requests-toolbelt==0.9.1', 'rfc3986==1.5.0', 'rope==0.19.0', 'SecretStorage==3.3.1', 'Send2Trash==1.8.0', 'six==1.16.0', 'smmap==4.0.0', 'snowballstemmer==2.1.0', 'stevedore==3.4.0', 'terminado==0.12.1', 'testpath==0.5.0', 'toml==0.10.2', 'tornado==6.1', 'tqdm==4.62.2', 'traitlets==5.1.0', 'twine==3.4.2', 'typing-extensions==3.10.0.2', 'urllib3==1.26.6', 'virtualenv==20.7.2', 'virtualenv-clone==0.5.7', 'wcwidth==0.2.5', 'webencodings==0.5.1', 'wrapt==1.12.1', 'zipp==3.5.0'];

document.getElementById("submit").addEventListener("click", () => {

    let results = [];

    let lines = document.getElementById("textbox").value.split("\n");

    for (let line of lines) {

        if (badDeps.indexOf(line) === -1) {
            results.push(line)
        }
    }

    document.getElementById("results").value = results.join("\n");

})