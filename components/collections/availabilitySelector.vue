<template>
  <CBox>
    <CHeading as="h3" size="lg" mb="50px">Select video chat availability for your website</CHeading>
    <table>
      <scheduler-row v-for="day in schedule" :key="day.index" :day.sync="day" @update="handleUpdate"></scheduler-row>
      <CBox as="tr">
        <td></td>
        <td></td>
        <td>
          <CSelect width="200px" rounded="20px" ml="30px" mt="80px" v-model="tz">
          <option v-for="tz in zones" :key="tz" :value="tz">{{tz}}</option>
        </CSelect>
        </td>
        <td></td>
        <td>
        <CButton width="200px" variant-color="brand" rounded="20px" mt="80px"> Save </CButton>
        </td>
      </CBox>
    </table>
  </CBox>
</template>

<script>
import SchedulerRow from "../items/schedulerRow";
export default {
  name: "availabilitySelector",
  components: {SchedulerRow},
  data() {
    return {
      schedule:[
        {
          index:0,
          day:'Sunday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:1,
          day:'Monday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:2,
          day:'Tuesday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:3,
          day:'Wednesday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:4,
          day:'Thursday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:5,
          day:'Friday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        },
        {
          index:6,
          day:'Saturday',
          active:false,
          start:'8:00 AM',
          end:'5:00 PM'
        }
      ],
      zones:[
        "PST",
        "MST",
        "CST",
        "EST",

      ],
      tz:"EST"
    }
  },
  methods: {
    handleUpdate(data) {
      this.schedule.splice(data.index, 1, data)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
