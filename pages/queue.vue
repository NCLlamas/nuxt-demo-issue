<template>
  <CTabs size="lg" borderBottomColor="rgba(74, 70, 144, 0.25)">
    <CTabList ref="tabList">
      <CTab>Queue</CTab>
      <CTab>Active
        <CBadge ml="5px" mb="10px" w="18px" h="18px" rounded="10px" variant="solid" variant-color="green">3</CBadge>
      </CTab>
      <CTab>Missed
        <CBadge ml="5px" mb="10px" w="18px" h="18px" rounded="10px" variant="solid" variant-color="red">1</CBadge>
      </CTab>
    </CTabList>
    <CTabPanels>
      <CTabPanel>
        <bordered-wrapper>
          <call-stack slot="left" title="Incoming Calls" :items="callItems"></call-stack>
        </bordered-wrapper>
      </CTabPanel>
      <CTabPanel>
        <bordered-wrapper>
          <call-stack slot="left" title="Active Calls" :items="activeItems">
            <template v-slot="{data}">
              <active-call-data :name="data.rep" :timestamp="data.timestamp"></active-call-data>
            </template>
          </call-stack>
        </bordered-wrapper>
      </CTabPanel>
      <CTabPanel>
        <bordered-wrapper>
          <call-stack slot="left" title="Missed Calls" :items="missedItems">
            <template v-slot="{data}">
              <missed-call-data :timestamp="data.timestamp"></missed-call-data>
            </template>
          </call-stack>
        </bordered-wrapper>
      </CTabPanel>
    </CTabPanels>
  </CTabs>
</template>

<script>
import borderedWrapper from "../components/wrappers/borderedWrapper";
import CallingCard from "../components/items/callingCard";
import CallStack from "../components/collections/callStack";
import ActiveCallData from "../components/items/activeCallData";
import MissedCallData from "../components/items/missedCallData"
import dayjs from 'dayjs'
export default {
  name: 'queue',
  components: {
    borderedWrapper,
    CallStack,
    CallingCard,
    ActiveCallData,
    MissedCallData,
  },
  data() {
    return {
      callItems: [
        {
          name: 'Miles Andrews',
          contact: 'mandrews@acme.io',
        }
      ],
      activeItems: [
        {
          name: 'Miles Andrews',
          contact: 'mandrews@acme.io',
          callData: {
            rep:'Andi Mayer',
            timestamp:dayjs().subtract(4,'m').add(23,'s').format()
          }
        },
        {
          name: 'Ryan Horne',
          contact: 'ryan.horne@ogt.io',
          callData: {
            rep:'Jessica Geltz',
            timestamp:dayjs().subtract(1,'m').format()
          }

        }
      ],
      missedItems: [
        {
          name: 'Miles Andrews',
          contact: 'mandrews@acme.io',
          callData: {
            timestamp:dayjs().subtract(1,'day').format()
          }
        }
      ],
    }
  },
  methods: {
    // updateBorder() {
    //   this.$refs['tabList'].$children.forEach(childNode => {
    //     console.log(childNode)
    //     childNode.componentStyles.borderBottom = childNode.isSelected ? '5px' : '2px'
    //   })
    // }
  },
  mounted() {
    // this.updateBorder()
  },
}
</script>

<style scoped lang="scss">
.showMeTheMoney {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: stretch;
  align-items: center;
}
</style>
