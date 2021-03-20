var x = new Date();
x.setDate(1);
x.setMonth(x.getMonth()+1);
var z = new Date();
z.setDate(1);
z.setMonth(z.getMonth()-1);
var y = new Date();
y.setDate(1);
y.setMonth(y.getMonth());
export default [
  {
    id:'jah6cda0jadtf249543',
    name:'Tojiboev Abdumannon',
    direction:'EPS',
    phone_number:'+998990127427',
    contract_number: '12',
    price_day: 23,
    price_month: new Intl.DateTimeFormat("en-EN", {month: "long",}).format(
       new Date(y)
    ),
    price: '400 000',
    time_class:'12:00',
    teacher:'Oydin'
  },
  {
    id:'jah6cda0jadtf249',
    name:'Tojiboev Abdumannon',
    direction:'EPS',
    phone_number:'+998990127427',
    contract_number: '12',
    price_day: 1,
    price_month: new Intl.DateTimeFormat("en-EN", {month: "long",}).format(
       new Date(x)
    ),
    price: '400 000',
    time_class:'12:00',
    teacher:'Bobir'
  },
  {
    id:'gfjduab8474GDj221af',
    name:"Abdusamadov Abdug'ani",
    direction:'English',
    phone_number:'+998330657427',
    contract_number: '13',
    price_day: 12,
    price_month: new Intl.DateTimeFormat("en-EN", {month: "long",}).format(
       new Date(x)
    ),
    price: 300000,
    time_class:'15:00',
    teacher:'Akmal'
  },
  {
    id:'gfjduab8474GDjaf',
    name:"Abdusamadov Abdug'ani",
    direction:'English',
    phone_number:'+998330657427',
    contract_number: '13',
    price_day: 12,
    price_month: new Intl.DateTimeFormat("en-EN", {month: "long",}).format(
       new Date(z)
    ),
    price: '300 000',
    time_class:'15:00',
    teacher:'Dildora'
  }
]
