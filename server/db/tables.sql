
create table budgeter.users (
	email varchar unique not null primary key,
	password varchar not null
);

create table budgeter.accounts (
	id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 99999999 CACHE 1 ) primary key,
	name varchar not null,
	user_id varchar not null,

	constraint users_fkey foreign key (user_id) references budgeter.users on delete cascade
);

create table budgeter.transactions (
	id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 99999999 CACHE 1 ),
	amount numeric not null,
	user_id varchar not null,
	account_id bigint not null,

	constraint account_fkey foreign key (account_id) references budgeter.accounts on delete cascade,
	constraint users_fkey foreign key (user_id) references budgeter.users on delete cascade
);
