'use strict';

/**
 * Processes parsed JSONified file data and sends back a map of Price Books
 *
 * @param {Object} inventoryItems - Parsed data from XML files
 * @returns {Object} - Inventory object
 */
export function parseInventoryItems (inventoryItems) {
	let inventoryList = [];

	for (let item of inventoryItems.inventory['inventory-list'][0].records[0].record) {
		let proxy = {
			productId: item.$['product-id'],
			allocation: +item.allocation[0],
			perpetual: item.perpetual[0] === 'true'
		};

		inventoryList.push(proxy);
	}

	return inventoryList;
}
