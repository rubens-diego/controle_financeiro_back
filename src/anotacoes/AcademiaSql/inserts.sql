--

insert into type_users (name)
values ('Aluno'), ('Funcionatio'), ('Proprietario'), ('Suporte'), ('Administrador');

insert into
    adresses (
        zip_code,
        street,
        complement,
        district,
        city,
        uf,
        ibge,
        address_number
    )
VALUES (
        '75460000',
        'são pedro',
        'teste',
        'centro',
        'neroplis',
        'go',
        '000',
        '000'
    ), (
        '75460000',
        'santa marta',
        'teste',
        'são pedro',
        'neroplis',
        'go',
        '000',
        '000'
    );

insert into emails (email)
values ('rdsdo@gmail.com'), ('rdsdo2011@gmail.com');

insert into
    phones (dd, telephone)
values ('62', '991544067'), ('62', '991544066');

insert into
    gyms (
        fantasy_name,
        social_reason,
        cpf_cnpj,
        address_id_fk,
        email_id_fk,
        phone_id_fk
    )
VALUES (
        'academia',
        'nome',
        '12345678901234',
        1,
        1,
        1
    );

insert into
    people (
        name,
        surname,
        cpf,
        birthday_date,
        address_id_fk,
        email_id_fk,
        phone_id_fk
    )
VALUES (
        'rubens diego',
        'santana de oliveira',
        '12345678961',
        '1993-03-04',
        2,
        2,
        2
    );

insert into
    users (
        user_name,
        password,
        people_id_fk,
        user_profile_id_fk
    )
VALUES ('root', 'root', 1, 1);