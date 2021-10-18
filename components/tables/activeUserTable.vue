<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    styleClass="vgt-table"
  >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'avatar'">
        <CAvatar size="sm" :name="props.row.name"></CAvatar>
      </span>
      <span v-else-if="props.column.field =='active'">
        {{makeDuration(props.row.active)}}
      </span>
      <span v-else-if="props.column.field == 'actions'">
          <c-button variant-color="blue" variant="ghost">Edit</c-button>
          <c-button variant-color="blue" variant="ghost">Delete</c-button>
          <c-button variant-color="blue" variant="ghost">More</c-button>
      </span>
    </template>
  </vue-good-table>
</template>

<script>
import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
dayjs.extend(relative)

export default {
  name: "activeUserTable",
  data(){
    return {
      columns: [
        {
          field: 'avatar',
        },
        {
          field: 'name',
        },
        {
          field: 'email',
        },
        {
          field: 'subscription',
        },
        {
          field: 'active',
        },
        {
          field: 'actions',
          type: 'boolean'
        },
      ],
      rows: [
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
        { name:"Joseph Munskins", email: "JoeMunskins20@hithere.us", subscription: 'Monthly',active: dayjs().subtract(2,'day').format() },
      ],
    };
  },
  methods: {
    makeDuration(val) {
      return dayjs().to(dayjs(val))
    }
  }
}
</script>

<style scoped lang="scss">

</style>
