<script>
	import Box from "$primitives/Box.svelte"
	import Cluster from "$primitives/Cluster.svelte"
	import FlexBox from "$primitives/FlexBox.svelte"
	import Sidebar from "$primitives/Sidebar.svelte"
	import Stack from "$primitives/Stack.svelte"
</script>

<Stack gap="xl">
	<Stack bg="brand" color="white">
		<Box>I'm a box</Box>
		<Box>I'm a box</Box>
		<Box>I'm a box</Box>
		<Box>I'm a box</Box>
		<Box>I'm a box</Box>
		<Box>I'm a box</Box>
	</Stack>
	<Cluster>
		<Box>cluster</Box>
		<Box>aaa</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>ddd</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>eee</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>jjj</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>aaa</Box>
		<Box>cluster</Box>
		<Box>ii</Box>
		<Box>ddd</Box>
		<Box>a</Box>
		<Box>cluster</Box>
		<Box>eee</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>jjj</Box>
		<Box>ddd</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>eee</Box>
		<Box>cluster</Box>
		<Box>cluster</Box>
		<Box>jjj</Box>
	</Cluster>
	<FlexBox>
		<Box>FlexBox box</Box>
		<Box>FlexBox box</Box>
	</FlexBox>
	<Sidebar>
		<Box bg="yellow-100">First child</Box>
		<Box bg="brand" color="white">Last child</Box>
	</Sidebar>
	<Sidebar side="right" gap="0">
		<Box bg="yellow-100">First child</Box>
		<Box bg="brand" color="white">Last child</Box>
	</Sidebar>
</Stack>
