const badDeps = ['blinker==1.4', 'cryptography==3.4.8', 'dbus-python==1.2.18', 'distro==1.7.0', 'httplib2==0.20.2', 'importlib-metadata==4.6.4', 'jeepney==0.7.1', 'keyring==23.5.0', 'launchpadlib==1.10.16', 'lazr.restfulclient==0.14.4', 'lazr.uri==1.0.6', 'more-itertools==8.10.0', 'oauthlib==3.2.0', 'Pygments==2.11.2', 'PyGObject==3.42.1', 'PyJWT==2.3.0', 'pyparsing==2.4.7', 'python-apt==2.4.0', 'PyYAML==5.4.1', 'SecretStorage==3.3.1', 'six==1.16.0', 'wadllib==1.3.6', 'zipp==1.0.0'];

document.getElementById("submit").addEventListener("click", () => {

    let results = [];

    let lines = document.getElementById("content").value.split("\n");

    for (let line of lines) {

        if (badDeps.indexOf(line) === -1) {
            results.push(line)
        }
    }

    document.getElementById("results").value = results.join("\n");

})