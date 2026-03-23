<script setup>
import { ref, computed} from "vue";

const producto = ref('');
const precio = ref('')
const carrito = ref([]);/*Es un Array para producto en el carrito*/

function agregarProducto(){
    if(producto.value === '' || precio.value === ''){
        alert('Complete los Campos')
        return
    }

    carrito.value.push({ /*Donde se almacenara el producto*/
        nombre: producto.value,
        precio: Number(precio.value)
    })

    producto.value = ""
    precio.value = ""
}

function eliminarProducto(index){
    carrito.value.splice(index, 1)
}



const total = computed(() =>{
    return carrito.value.reduce((suma, item) => suma + item.precio, 0)
})



</script>

<template>
<div class="cointainer">
  <h2>Carrito </h2>
  <input v-model="producto" type="text"  placeholder="Producto">
  <input v-model="precio" type="number" placeholder="Precio">
  <button @click="agregarProducto">Agregar</button>


  <ul>
    <li v-for="(item, index) in  carrito" :key="ïndex">{{ item.nombre }} - ${{ item.precio }}
        <button class="eliminar" @click="eliminarProducto(index)"></button>
    </li>
  </ul>

  <p v-if="carrito.length === 0" class="vacio">
    Tu Carrito Esta Vacio
  </p>

  <h3 v-if="carrito.length > 0" :class="['total', total > 100 ? 'rojo' : 'verde']"> Total: ${{ total }}</h3>


</div>

</template>