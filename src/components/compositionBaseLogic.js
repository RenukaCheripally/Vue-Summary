import {ref, onMounted} from 'vue'
export function commonLogic() {
  const message = ref("You are awesome!");

  onMounted(() => {
    setTimeout(() => {
      message.value = "Yes! You're really awesome. I'm a reusable logic";
    }, 2000);
  })

  return { message };
}