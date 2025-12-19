import Default_Icon from '@/assets/default_icon.png';
import Event_BearTrap_Icon from '@/assets/icons/event_bear_trap.png';
import Event_CanyonClash_Icon from '@/assets/icons/event_canyon_clash.png';
import Event_FoundryBattle_Icon from '@/assets/icons/event_foundry_battle.png';
import Event_ReturnToTundra_Icon from '@/assets/icons/event_return_to_tundra.webp';
import Event_SunfireCastle_Icon from '@/assets/icons/event_sunfire_castle.png';
import Item_FireCrystal_Icon from '@/assets/icons/item_fire_crystal.png';

export const ICONS = {
  ':DEFAULT:': Default_Icon,

  ':EVENT_BEAR_TRAP:': Event_BearTrap_Icon,
  ':EVENT_CANYON_CLASH:': Event_CanyonClash_Icon,
  ':EVENT_FOUNDRY_BATTLE:': Event_FoundryBattle_Icon,
  ':EVENT_RETURN_TO_TUNDRA:': Event_ReturnToTundra_Icon,
  ':EVENT_SUNFIRE_CASTLE:': Event_SunfireCastle_Icon,

  ':ITEM_FIRE_CRYSTAL:': Item_FireCrystal_Icon,
} as const;
