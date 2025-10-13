import { DefineComponent } from "vue";

const uiElements = []

async function loadComponent() {
  try {
    const component = await import(`./ui/CustomForm.vue`);
    return component.default;
  } catch (error) {
  }
}

loadComponent()
  .then((comp) => {
    if (comp) uiElements.push(comp)
  })
  .catch(() => { })

export { uiElements }