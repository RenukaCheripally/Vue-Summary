<template>
  <div class="actions">
    <section class="actions-applied" v-if="appliedActions.length > 0">
      <div v-for="(action, actionIndex) in appliedActions" :key="action.id">
        <div class="applied-action-container">
          <header class="action-header">
            <span class="label">{{ action.label }}</span>
            <v-button
              v-if="components[action.action] !== undefined"
              buttonName="Delete"
              type="delete"
              :clickButton="() => deleteAction(actionIndex)"
            />
          </header>
          <div class="action-content">
            <component :is="components[action.action]" :value="action.value" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <v-select type="secondary" class="action-condition" :options="options" v-model="selectedAction" @input="handleSelect" />
      <div v-if="!['add', undefined].includes(selectedAction) && components[selectedAction] !== undefined" class="applied-action-container">
        <header class="action-header">
          <span class="label">{{ selectedAction }}</span>
          <v-button
            v-if="components[selectedAction] !== undefined"
            :clickButton="addAction"
            buttonName="Add"
            type="save"
          />
        </header>
        <div class="action-content">
          <component :is="components[selectedAction]" :value="newAction" @update="handleUpdate"></component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/actions.css'
export default {
  name: 'ActionsMain',
  data() {
    return {
      newAction: {},
      components: {
        send_message: 'sendMessage',
      },
      selectedAction: 'add',
      options: [
        {
          value: 'add',
          label: 'Add Condition'
        },
        {
          value: 'send_message',
          label: 'Send message',
        },
        {
          value: 'award_points',
          label: 'Award points',
        },
        {
          value: 'set_status',
          label: 'Set status',
        },
        {
          value: 'request_user_rating',
          label: 'Request user rating',
        },
        {
          value: 'free_redemption',
          label: 'Free Redemption',
        },
      ],
      appliedActions: [
        {
          id: 1,
          action: 'send_message',
          label: 'Send Message',
          value: {
            text: 'Please make sure to attend',
            title: 'Review Meeting',
            channel: 'web_devs',
          }
        }
      ]
    }
  },
  methods: {
    handleUpdate(updatedData) {
      this.newAction = updatedData;
    },
    handleSelect() {
      this.newAction = {};
    },
    addAction() {
      this.appliedActions.push({
        id: this.appliedActions.length + 1,
        action: this.selectedAction,
        label: this.options.find(option => option.value === this.selectedAction).label,
        value: this.newAction
      })
      console.log(this.appliedActions);
      this.resetAction();
    },
    deleteAction(actionIndex) {
      this.appliedActions.splice(actionIndex, 1);
    },
    resetAction() {
      this.selectedAction = 'add';
      this.newAction = {};
    }
  }
}
</script>

