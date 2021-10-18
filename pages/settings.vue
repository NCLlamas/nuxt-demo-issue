<template>
  <CBox>
    <non-tab-header title="Team"></non-tab-header>
    <CFlex align="center" justify="space-between" my="30px">
      <CHeading as="h3" size="lg">Active Users</CHeading>
      <CButton width="200px" variant-color="brand" rounded="20px">Add Users</CButton>
    </CFlex>
    <active-user-table>
    </active-user-table>
  </CBox>
</template>

<script>
import NonTabHeader from "../components/navigation/NonTabHeader";
import activeUserTable from "../components/tables/activeUserTable";
export default {
  name: "settings",
  components: { NonTabHeader,activeUserTable}
}
</script>

<style scoped lang="scss">

</style>
