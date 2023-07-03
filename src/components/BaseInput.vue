<template>
  <div :class="inputClass()">
    <div v-if="slots.label || label" :class="inputClass('label')">
      <span :class="inputClass('label-text')">
        <slot name="label">
          {{ label }}
        </slot>
      </span>
    </div>
    <div :class="inputClass('input-wrapper')">
      <div v-if="slots.leftIcon || leftIcon" :class="inputClass('icon')">
        <font-awesome-icon :icon="leftIcon" />
        <slot name="leftIcon" />
      </div>
      <input
        :type="type"
        :placeholder="placeHolder"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement)?.value)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
import bem from "bem-ts";

const slots = useSlots();

withDefaults(
  defineProps<{
    leftIcon?: string;
    label?: string;
    type?: string;
    placeHolder?: string;
    modelValue?: string | number;
  }>(),
  {
    type: "text",
    leftIcon: "fa-solid fa-user-secret",
  }
);

defineEmits<{
  (e: "update:modelValue", value: number | string): void;
}>();

const inputClass = bem("input-holder", { strict: false });
</script>

<style lang="scss">
.input-holder {
  display: block;
  transition: 0.1s ease-in-out;
  margin-bottom: 0.5rem;
  width: 100%;

  &__label {
    color: #313131c4;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    background-color: rgb(232, 244, 253);
    width: 100%;
    border-radius: 0.7rem;

    &:has(input:focus) {
      border: 1px solid rgb(164, 214, 253);
    }
  }

  &__icon {
    padding: 0.2rem 0.3rem 0.2rem 0.6rem;
    color: #313131c4;
  }

  input {
    border: none;
    outline: none;
    padding: 1rem 0.5rem 1rem 0.5rem;
    width: 100%;
    background: none;
    color: #313131c4;

    &::placeholder {
      color: #3d3d3d5d;
    }
  }
}
</style>
