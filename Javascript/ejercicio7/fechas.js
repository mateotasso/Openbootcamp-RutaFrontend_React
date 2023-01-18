// - La fecha de hoy
const hoy = new Date();

// - La fecha de tu nacimiento
const nacimiento = new Date(1995, 5, 15)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const es_mas_tarde = hoy > nacimiento

// - Una variable que contenga el día de tu nacimiento
const dia_nacimiento = nacimiento.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_nacimiento = nacimiento.getMonth()

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo_nacimiento = nacimiento.getFullYear()

