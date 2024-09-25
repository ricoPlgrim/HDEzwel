<template>
    <p>모방</p>
</template>

<style scoped lang="scss">

@media (max-width: 960px) {
	.page-guide-nav {
		position: inherit;
		width: 100%;
		.nav-title{
			a{
				display: flex;
				justify-content: center;
				font-size: 13px;
				.ico-logo{		
					width: 180px;
					height: 26px;
				}
			}
		}
		.nav {
			ul {
				display: none;
			}
		}
		
	    &.guide{ 
	        position: fixed; 
			width: auto;
	    }
	}

	.page-guide-content {
		min-width: auto;
		padding: 30px 10px;

		.guide-title2 {
			display: none;
		}
	}

	.guide-table {
		overflow-x: auto;

		table {
			min-width: 990px;
		}
	}
}
</style>