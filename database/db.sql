create table books (
    id int not null auto_increment, 
    name varchar(255) not null,
    author varchar(255) not null,
    genre varchar(255) not null,
    description varchar(500) not null,
    image varchar(500) not null,
    created_by int(11) null,
    primary key(id)
)

create table users (
    id int(11) not null auto_increment,
    username varchar(255) not null,
    pwd varchar(255) not null,
    role varchar(255) not null default 'user',
    status tinyint not null default 1,
    primary key(id)
)

create table genres (
    id int not null auto_increment, 
    name varchar(255) not null,
    description varchar(500) not null,
    image varchar(500) not null,
    created_by int(11) null,
    primary key(id)
)