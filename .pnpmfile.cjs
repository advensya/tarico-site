const org = "advensya";
const githubToken = process.env.GITHUB_TOKEN; // à définir en CI/CD
const useToken = Boolean(githubToken);

module.exports = {
  hooks: {
    readPackage(pkg) {
      const rewriteDeps = (deps = {}) => {
        for (const depName of Object.keys(deps)) {
          if (depName.startsWith('@tarico/') || depName.startsWith('@sya/')) {
            let repoName = depName.split('/')[1];
            const version = deps[depName]; // branche, tag ou commit
            let ref = ''

            if (version && version !== '*') {
              if (version.split(':').length > 1) {
                const [repo, branch] = version.split(':')
                ref = `#${branch}`
                repoName = repo
              } else ref = `#${version}`
            }

            // const ref = version && version !== "*" ? `#${version}` : '#main';

            if (useToken) {
              // Mode HTTPS avec token
              // deps[depName] = `https://${githubToken}@github.com/${org}/${repoName}.git${ref}`;
              // deps[depName] = `git+https://github.com/${org}/${repoName}.git${ref}`;

              deps[depName] = `git+https://oauth2:${githubToken}@github.com/${org}/${repoName}.git${ref}`;


              console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
              console.log(deps[depName]);

            } else {
              // Mode SSH (local dev)
              deps[depName] = `git+ssh://git@github.com/${org}/${repoName}.git${ref}`;
            }
          }
        }
      };

      if (pkg.dependencies) rewriteDeps(pkg.dependencies);
      if (pkg.devDependencies) rewriteDeps(pkg.devDependencies);
      if (pkg.optionalDependencies) rewriteDeps(pkg.optionalDependencies);
      if (pkg.peerDependencies) rewriteDeps(pkg.peerDependencies);

      return pkg;
    },
  },
};
