CREATE TABLE "profile"(
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "profile" ADD PRIMARY KEY("id");
CREATE TABLE "associations"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "iban" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL, 
    "logo" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "associations" ADD PRIMARY KEY("id");
CREATE TABLE "categories"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "categories" ADD PRIMARY KEY("id");
CREATE TABLE "associations_categories"(
    "id" SERIAL NOT NULL,
    "association_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL
);
ALTER TABLE
    "associations_categories" ADD PRIMARY KEY("id");
CREATE TABLE "users"(
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "associations_categories" ADD CONSTRAINT "associations_categories_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "categories"("id");
ALTER TABLE
    "profile" ADD CONSTRAINT "profile_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "associations_categories" ADD CONSTRAINT "associations_categories_association_id_foreign" FOREIGN KEY("association_id") REFERENCES "associations"("id");