<script lang="ts" setup>
import { analyApi } from '@/api/analy'

const { link } = useRoute().params
const loadData = async () => {
  const data = await analyApi.get({ link })
  data && (globalThis.location.href = data.content)
}
loadData()
</script>
