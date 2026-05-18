ServerEvents.recipes(event => {
  // Mekanism
  var ingredients = {
    O: 'mekanism:ingot_osmium',
    D: 'minecraft:diamond',
    S: 'aether:skyroot_stick'
  }

  event.remove({ output: 'mekanismtools:osmium_pickaxe' })
  event.shaped('mekanismtools:osmium_pickaxe',
    [
      'ODO',
      ' S ',
      ' S '
    ],
    ingredients
  ).id('kubejs:osmium_pickaxe')

  event.remove({ output: 'mekanismtools:osmium_axe', })
  event.shaped('mekanismtools:osmium_axe',
    [
      'DO ',
      'OS ',
      ' S '
    ],
    ingredients
  ).id('kubejs:osmium_axe')

  ingredients = {
    O: 'mekanism:ingot_osmium',
    D: 'minecraft:diamond',
  }

  event.remove({ output: 'mekanismtools:osmium_chestplate', })
  event.shaped('mekanismtools:osmium_chestplate',
    [
      'O O',
      'ODO',
      'OOO'
    ],
    ingredients
  ).id('kubejs:osmium_chestplate')


  event.remove({ output: 'mekanismtools:osmium_helmet', })
  event.shaped('mekanismtools:osmium_helmet',
    [
      'ODO',
      'O O',
      '   '
    ],
    ingredients
  ).id('kubejs:osmium_helmet')

  event.remove({ output: 'mekanismtools:osmium_leggings', })
  event.shaped('mekanismtools:osmium_leggings',
    [
      'ODO',
      'O O',
      'O O'
    ],
    ingredients
  ).id('kubejs:osmium_leggings')

  event.remove({ output: 'mekanismtools:osmium_boots', })
  event.shaped('mekanismtools:osmium_boots',
    [
      '   ',
      'D O',
      'O O'
    ],
    ingredients
  ).id('kubejs:osmium_boots')


  const mektools = [
    'mekanismtools:osmium_pickaxe',
    'mekanismtools:osmium_axe',
    'mekanismtools:osmium_shovel',
    'mekanismtools:osmium_hoe',
    'mekanismtools:osmium_sword',
    'mekanismtools:osmium_paxel',
    'mekanismtools:refined_obsidian_pickaxe',
    'mekanismtools:refined_obsidian_axe',
    'mekanismtools:refined_obsidian_shovel',
    'mekanismtools:refined_obsidian_hoe',
    'mekanismtools:refined_obsidian_sword',
    'mekanismtools:diamond_paxel',
    'mekanismtools:netherite_paxel'
  ]

  mektools.forEach(tool => {
    event.replaceInput(
      { output: tool },
      'minecraft:stick',
      'aether:skyroot_stick'
    )
  })


  // WAYSTONES
  event.remove({ output: 'waystones:warp_stone' })
  event.shaped('waystones:warp_stone', [
    'AEA',
    'ETE',
    'AEA'
  ], {
    A: 'minecraft:amethyst_shard',
    E: 'minecraft:ender_pearl',
    T: 'mekanism:teleportation_core'
  }).id('kubejs:warp_stone')


  // TRAVELERS BACKPACK
  event.remove({ output: 'travelersbackpack:standard' })
  event.shaped('travelersbackpack:standard', [
    'LSL',
    ' B ', // Lo spazio vuoto rappresenta la Air
    'LML'
  ], {
    L: 'minecraft:leather',
    S: 'minecraft:string',
    B: '#c:shulker_boxes',             // '#' definisce una Tag
    M: '#travelersbackpack:sleeping_bags' // '#' definisce una Tag
  }).id('kubejs:standard_travelers_backpack')


  // MEKANISM
  event.remove({ output: 'mekanism:osmium_compressor' })
  event.shaped('mekanism:osmium_compressor', [
    'IPI',
    'CSC',
    'INI'
  ], {
    I: 'mekanism:alloy_infused',
    P: 'minecraft:piston',
    C: 'mekanism:advanced_control_circuit',
    S: 'mekanism:steel_casing',
    N: 'minecraft:netherite_block'
  }).id('kubejs:osmium_compressor')


  event.remove({ output: 'mekanism:portable_teleporter' })
  event.shaped('mekanism:portable_teleporter', [
    ' E ',
    'CWC',
    ' E '
  ], {
    E: 'mekanism:energy_tablet',
    C: 'mekanism:advanced_control_circuit',
    W: 'waystones:warp_stone'
  }).id('kubejs:portable_teleporter')

})
