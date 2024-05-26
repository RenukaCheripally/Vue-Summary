<template>
  <div class="actions">
    <section class="actions-applied" v-if="getAutomationActions.length > 0">
      <div v-for="(action, actionIndex) in getAutomationActions" :key="action.id">
        <div class="applied-action-container">
          <header class="action-header">
            <span class="label">{{ action.label }}</span>
            <v-button v-if="components[action.action] !== undefined" buttonName="Delete" type="delete"
              :clickButton="() => deleteAction(actionIndex)" />
          </header>
          <div class="action-content">
            <component :is="components[action.action]" :value="action.value" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <v-select type="secondary" class="action-condition" :options="options" v-model="selectedAction"
        @input="handleSelect" />
      <div v-if="!['add', undefined].includes(selectedAction) && components[selectedAction] !== undefined"
        class="applied-action-container">
        <header class="action-header">
          <span class="label">{{ getLabel }}</span>
          <v-button v-if="components[selectedAction] !== undefined" :clickButton="addAction" buttonName="Add"
            type="save" />
        </header>
        <div class="action-content">
          <component :is="components[selectedAction]" :value="newAction" @update="handleUpdate"></component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/actions.css';
import { mapGetters, mapActions } from 'vuex';
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
          label: 'Add action'
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
    }
  },
  computed: {
    ...mapGetters(['getAutomationActions']),
    getLabel() {
      return this.options.find(option => option.value === this.selectedAction).label
    }
  },
  methods: {
    ...mapActions(['updateAutomation']),
    // methods
    handleUpdate(updatedData) {
      this.newAction = updatedData;
    },
    handleSelect() {
      this.newAction = {};
    },
    addAction() {
      // get existing actions
      const appliedActions = this.getAutomationActions;
      // add new action
      appliedActions.push({
        id: this.getAutomationActions.length + 1,
        action: this.selectedAction,
        label: this.getLabel,
        value: this.newAction
      });
      // update actions
      this.updateAutomation({ appliedActions });
      // reset
      this.resetAction();
    },
    deleteAction(actionIndex) {
      // get existing filters
      const appliedActions = this.getAutomationActions;
      // delete filter based on index
      appliedActions.splice(actionIndex, 1);
      // update filters
      this.updateAutomation({ appliedActions });
    },
    resetAction() {
      this.selectedAction = 'add';
      this.newAction = {};
    }
  }
}
</script>
