<template>
  <tr>
    <td>
    <CSwitch size="lg" col-span="1" mr="30px" id="enabled" v-model="enabled" />
    </td>
    <td>
    <CText col-span="2" fontSize="20px" fontWeight="500">{{day.day}}</CText>
    </td>
    <td>
    <CSelect :isDisabled="!enabled" col-span="4" width="200px" rounded="20px" ml="30px" v-model="startTime">
      <option v-for="(item,index) in hours" :key="index" :value="item">{{item}}</option>
    </CSelect>
    </td>
    <td>
    <CText col-span="1" mx="15px">to</CText>
    </td>
    <td>
    <CSelect :isDisabled="!enabled" col-span="4" width="200px" rounded="20px" v-model="endTime" my="8px">
      <option v-for="(item,index) in hours" :key="index" :value="item">{{item}}</option>
    </CSelect>
    </td>
  </tr>
</template>

<script>
export default {
  name: "schedulerRow",
  props:{
    day: Object
  },
  data() {
    return {
      hours:[
        '12:00 AM',
        '1:00 AM',
        '2:00 AM',
        '3:00 AM',
        '4:00 AM',
        '5:00 AM',
        '6:00 AM',
        '7:00 AM',
        '8:00 AM',
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM',
        '6:00 PM',
        '7:00 PM',
        '8:00 PM',
        '9:00 PM',
        '10:00 PM',
        '11:00 PM',
      ],
    }
  },
  computed: {
    enabled:{
      get() {
        return this.day.enabled
      },
      set(val) {
        this.$emit('update',{
          ...this.day,
          ...{
            enabled:val
          }
        })
      }
    },
    startTime:{
      get() {
        return this.day.start
      },
      set(val) {
        this.$emit('update', {
          ...this.day,
          ...{
            start: val
          }
        })
      }
    },
    endTime:{
      get() {
        return this.day.end
      },
      set(val) {
        this.$emit('update', {
          ...this.day,
          ...{
            end: val
          }
        })
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>
