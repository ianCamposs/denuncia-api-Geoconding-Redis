import knex, { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('relatorio', table => {
    table.increments('id').primary
    table.decimal('latitude').notNullable
    table.decimal('longitude').notNullable
    table.json('denunciante').notNullable
    table.json('denuncia').notNullable
    table.json('endereco').notNullable
  })
}


export async function down(knex: Knex) {
  return knex.schema.dropTable('relatorio')
}