<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import f from "~/plugins/firebase.server.js";
import {getDocs, query} from "firebase/firestore";

let docs = await getDocs(query(f.testCollection));
</script>
