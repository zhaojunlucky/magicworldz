#!/bin/bash +x

usage() { echo "Usage: $0 [--base-href <base href>] [--prod] [--target-dir <target dir>]" 1>&2; exit 1; }

trim() {
    local var="$*"
    # remove leading whitespace characters
    var="${var#"${var%%[![:space:]]*}"}"
    # remove trailing whitespace characters
    var="${var%"${var##*[![:space:]]}"}"
    printf '%s' "$var"
}


options=$(getopt -o 'h' -l 'prod,help,gh-docs:,base-href:' -- "$@")
ret="$?"

if [ $ret != "0" ]; then
usage
fi


eval set -- "$options"

base_href=""
prod=""
gh_docs=""

while [[ $# -gt 0 ]]; do
	# echo "\$1=$1,\$2=$2"
	case $1 in
		-h|--help) usage ;;
		--base-href) base_href="$2"; shift 2 ;;
		--gh-docs) gh_docs="$2"; shift 2;;
		--prod) prod="--prod"; shift ;;
		--) shift ; break ;;
		-?*) printf 'WARN: Unknown option (ignored): %s\n' "$1" >&2 ;;
		*) break ;;
	esac
done

if ! [[ $base_href =~ ^\/.+\/$ ]]; then
	echo "invalid base href"
	exit 1
fi

printenv

echo "configuration:"
echo -e "\tbase_href=$base_href"
echo -e "\tprod=$prod"
echo -e "\tgh_docs=$gh_docs"

echo -e "\nstart build"

if [[ $(uname -s) = @(MSYS|MINGW64|MINGW32|CYGWIN)_NT* ]]; then
	echo "using cmd.exe"
	command="ng build --base-href ${base_href} $prod"
	cmd.exe /C "$command"
else
	ng build --base-href "${base_href}" "$prod"
fi


if [ ! -z "$gh_docs" ]; then
	echo "deploy to ${gh_docs}"
	if [ -d "$gh_docs" ]; then
		echo -n "removing files under $gh_docs"
		rm -rf $gh_docs/*
		echo " ... done"
	else
		echo -n "creating directory $gh_docs"
		mkdir -p $gh_docs
		echo " ... done"
	fi
	echo -n "copying output to $gh_docs"
	cp -rf ./dist/magicworldz/* $gh_docs
	echo " ... done"
fi