<p align="center">
  <img src="https://raw.githubusercontent.com/FajarRamadhan27/booking_app/main/public/images/booking-app.png">
</p>

# Booking App Demo

This is demo program off booking app system

## Features

- Database Seeders
- Unit testing
- HTTP Validation
- Laravel Mix with React Js
- Basic state Management using Redux

## Installation & Reguirement

- Laravel 9
- PHP >= 7.3
- Mysql Database
- Sqlite Database (Used for unit testing)
- Laravel Mix 
- React Js
- Tailwind Css

## Setup Project

#### 1. Clone repository

Clone the repository to your local system
```sh
git@github.com:FajarRamadhan27/booking_app.git

cd booking_app
```

#### Create .env

```sh
cp .env.example .env
```

#### Install backend depedency using composer

```sh
composer install
```

#### Generate application key

```sh
php artisan key:generate
```

#### Symlink folder public

```sh
php artisan storage:link
```

#### Install frontend depedency

```sh
npm install
```

#### Compile frontend codes

```sh
npm run dev
```

#### insert mysql/mariadb credential to .env
```
// pada file .env

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=databasename
DB_USERNAME=databse_user
DB_PASSWORD=database_password
```

#### Migrate database

```sh
php artisan migrate
```

#### Seed database

```sh
php artisan db:seed
```

#### Run unit testing

```sh
.\vendor\bin\phpunit or php artisan test
```

### Configure base url in files resources\js\utils\network\AxiosClient.js

```sh
    const axiosClient = axios.create({
        baseURL: `http://booking_app.test/api/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
```

### Configure BadWord in file app\rules\BadWord.php
```
    $words = array('badword', 'badword' , 'badword' , 'badword');
```
## Server Configuration

### Windows machine

if using Windows we could use [laragon](https://laragon.org/download/) insted of xampp.

### Mac machine

if using Mac we could use [Laravel Valet](https://laravel.com/docs/5.8/valet)

---
