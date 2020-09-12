#!/bin/bash
# +-----------------+
# | npm postinstall |
# | @bugsounet      |
# +-----------------+

# get the installer directory
Installer_get_current_dir () {
  SOURCE="${BASH_SOURCE[0]}"
  while [ -h "$SOURCE" ]; do
    DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
  done
  echo "$( cd -P "$( dirname "$SOURCE" )" && pwd )"
}

Installer_dir="$(Installer_get_current_dir)"

# move to installler directory
cd "$Installer_dir"

source utils.sh

# module name
Installer_module="GABackground"
Version="$(node -p -e "require('./../package.json').version")"
Installer_info "Welcome to $Installer_module v$Version"
echo
Installer_info "Installing all recipes..."
echo

Installer_info "Copy recipe 'with-Background.js' to MMM-GoogleAssistant recipe directory"
cp -f with-Background.js ../../MMM-GoogleAssistant/recipes && Installer_success "Done"
Installer_info "Copy recipe 'with-BackgroundStatus.js' to MMM-GoogleAssistant recipe directory"
cp -f with-BackgroundStatus.js ../../MMM-GoogleAssistant/recipes && Installer_success "Done"

echo

Installer_success "$Installer_module is now installed !"
echo

