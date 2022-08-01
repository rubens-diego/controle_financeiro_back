create table
    if not exists adresses (
        id serial PRIMARY KEY,
        zip_code varchar(10),
        street varchar(200),
        complement varchar(500),
        district varchar(100),
        city varchar(60),
        uf varchar(2),
        ibge varchar(10),
        address_number varchar(4),
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null
    );

create table
    if not exists emails (
        id serial PRIMARY KEY,
        email varchar(60) unique,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null
    );

create table
    if not exists phones (
        id serial PRIMARY KEY,
        dd varchar(3),
        telephone varchar(10),
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null
    );

create table
    if not exists gyms (
        id serial PRIMARY KEY,
        fantasy_name varchar(250) unique,
        social_reason varchar(250) unique,
        cpf_cnpj varchar(14) unique,
        active boolean default true,
        blocked boolean default false,
        address_id_fk int,
        email_id_fk int,
        phone_id_fk int,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null,
        CONSTRAINT fk_gym_address FOREIGN KEY (address_id_fk) REFERENCES adresses (id),
        CONSTRAINT fk_gym_emails FOREIGN KEY (email_id_fk) REFERENCES emails (id),
        CONSTRAINT fk_gym_phone FOREIGN KEY (phone_id_fk) REFERENCES phones (id)
    );

create table
    if not exists people (
        id serial PRIMARY KEY,
        name varchar(250),
        surname varchar(250),
        cpf varchar(12) unique,
        birthday_date date,
        adress_id_fk int,
        emails_id_fk int,
        phone_id_fk int,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null,
        CONSTRAINT fk_peoples_adress FOREIGN KEY (adress_id_fk) REFERENCES adresses (id),
        CONSTRAINT fk_peoples_emails FOREIGN KEY (emails_id_fk) REFERENCES emails (id),
        CONSTRAINT fk_peoples_phones FOREIGN KEY (phone_id_fk) REFERENCES phones (id)
    );

create table
    if not exists people_gyms (
        id serial PRIMARY KEY,
        people_id_fk int not null,
        gym_id_fk int not null,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null,
        CONSTRAINT fk_people_gyms_peole FOREIGN KEY (people_id_fk) REFERENCES people (id),
        CONSTRAINT fk_people_gyms_gyms FOREIGN KEY (gym_id_fk) REFERENCES gyms (id)
    );

create table
    if not exists type_users (
        id serial PRIMARY KEY,
        type_user varchar(250) not null unique,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null
    );

create table
    if not exists users (
        id serial PRIMARY KEY,
        user_name varchar(250) unique not null,
        password varchar(250) not null,
        active boolean default true not null,
        blocked boolean default false not null,
        refresh_token varchar,
        data_valid_Refresh_token date,
        user_admin boolean default false not null,
        people_id_fk int unique,
        user_profile_id_fk int default 1,
        created_at timestamp default now() not null,
        updated_at timestamp default now() not null,
        CONSTRAINT fk_user_type_users FOREIGN KEY (people_id_fk) REFERENCES type_users (id),
        CONSTRAINT fk_user_people FOREIGN KEY (people_id_fk) REFERENCES people (id)
    );

-- create table if not exists medidas (

--                                        id serial PRIMARY KEY,

--                                        data_avaliacao date,

--                                        peso NUMERIC(6, 3) not null,

--                                        estatura int not null,

--                                        torax_normal int,

--                                        torax_expandido int,

--                                        braco_direito_relaxado int,

--                                        braco_direito_expandido int,

--                                        braco_esquerdo_relaxado int,

--                                        braco_esquerdo_expandido int,

--                                        cintura int,

--                                        abdomem int,

--                                        quadril int,

--                                        coxa_medial_direira int,

--                                        coxa_medial_esquerda int,

--                                        panturrilia_direita int,

--                                        panturrilia_esquerda int,

--                                        observacoes varchar(5000),

--                                        pessoas_id_fk int,

--                                        created_at timestamp default now() not null,

--                                        updated_at  timestamp default now() not null,

--                                        CONSTRAINT fk_medidas_pessoas FOREIGN KEY (pessoas_id_fk) REFERENCES pessoas (id)

-- );

-- create table if not exists exercicios (

--                                           id serial PRIMARY KEY,

--                                           nome varchar(250),

--                                           exercicio_url_image varchar(500),

--                                           academia_id_fk int,

--                                           created_at timestamp default now() not null,

--                                           updated_at  timestamp default now() not null,

--                                           CONSTRAINT academia_pessoas FOREIGN KEY (academia_id_fk) REFERENCES academias (id)

-- );

-- create table if not exists treinos (

--                                        id serial PRIMARY KEY,

--                                        nome varchar(500),

--                                        observacoes varchar(500),

--                                        created_at timestamp default now() not null,

--                                        updated_at  timestamp default now() not null,

-- );

-- create table if not exists series_exercicios (

--                                                  id serial PRIMARY KEY,

--                                                  serie int,

--                                                  vezes int,

--                                                  kilos NUMERIC(4, 2),

--                                                  tempo varchar(250),

--                                                  intervalo varchar(250),

--                                                  exercicios_id_fk int,

--                                                  treinos_id_fk int,

--                                                  created_at timestamp default now() not null,

--                                                  updated_at  timestamp default now() not null,

--                                                  CONSTRAINT fk_series_exercicios_exercicios FOREIGN KEY (exercicios_id_fk) REFERENCES exercicios (id),

--                                                  CONSTRAINT fk_series_exercicios_treinos FOREIGN KEY (treinos_id_fk) REFERENCES treinos (id)

-- );