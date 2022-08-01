-- CreateTable
CREATE TABLE "forgot_users" (
    "id" SERIAL NOT NULL,
    "hash_forgotten-password" VARCHAR(250),
    "user_id_fk" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_922a040e4ac0076954f83a42f57" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" SERIAL NOT NULL,
    "name_menu" VARCHAR(30) NOT NULL,
    "name_rota_menu" VARCHAR(30) NOT NULL,
    "name_icon_menu" VARCHAR(30) NOT NULL,
    "reference_id_menu" INTEGER,
    "role_id_fk" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_3fec3d93327f4538e0cbd4349c4" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(250),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_menus" (
    "id" SERIAL NOT NULL,
    "user_id_fk" INTEGER NOT NULL,
    "menu_id_fk" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_94464e0379fbfb392dcb7b8bf27" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_name" VARCHAR(250),
    "password" VARCHAR(250),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "blocked" BOOLEAN NOT NULL DEFAULT true,
    "refresh_token" VARCHAR(500),
    "data_valid_refresh_token" DATE,
    "user_admin" BOOLEAN NOT NULL DEFAULT false,
    "role_id_fk" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_9440ab4dc203b49b6245a72b69d" ON "forgot_users"("hash_forgotten-password");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_648e3f5447f725579d7d4ffdfb7" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_074a1f262efaca6aba16f7ed920" ON "users"("user_name");

-- AddForeignKey
ALTER TABLE "forgot_users" ADD CONSTRAINT "fk_user_forgot_user" FOREIGN KEY ("user_id_fk") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "fk_menus_menus" FOREIGN KEY ("reference_id_menu") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "fk_menus_user_profiles" FOREIGN KEY ("role_id_fk") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_menus" ADD CONSTRAINT "fk_menus_users" FOREIGN KEY ("menu_id_fk") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_menus" ADD CONSTRAINT "fk_users_menus" FOREIGN KEY ("user_id_fk") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_users_roles" FOREIGN KEY ("role_id_fk") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
