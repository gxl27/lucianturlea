# Lucianturlea (Symfony framework)

Portofolio with job tracker

## Contents

1. [Overview](#overview)
1. [Install](#install)
1. [Database](#database)
1. [Credentials](#credentials)

## Overview

Lucianturlea it's a demonstrative project of the portofolio. It sums good web design practices (UI and UX design) like text hierarchy, negative space, layers contrast, small animation effects, structured information. Also, it has an administration area where the database info can be changed. It was developed by Lucian Turlea

## Install

For installation, it requires composer package management.

So clone the repository and install the package with composer.

```bash
git clone https://github.com/gxl27/lucianturlea.git;
cd lucianturlea;
composer install;
```
## Database

> :warning: **The repository contains a demonstrative database, .env file needs to be change with your credentials** 

After install, make sure you have a database connection and change the .env file with your user and password.
Use symfony's make bundle to create the new database and import the demonstrative database from the repository

```bash
php bin/console make:database;
mysql -u root -p lucianturlea < lucianturlea.sql;
composer dump-env prod;
```

For the linux machines, clear cache and set the permisions for the 2 folders "public" and "var" to 777:

```bash
php bin/console c:c;
chmod 777 -R public/*;
chmod 777 -R var/*;
```
## Credentials

Now the instalation it's complete and the administration area (/admin) can be accessed.
username: admin
password: admin
