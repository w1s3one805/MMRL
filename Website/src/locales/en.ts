export const en = {
  continue: "Continue",
  caution: "Caution",
  latest: "Latest",
  security: "Security",
  changelog: "Changelog",
  new: "New",
  search: "Search",
  updates: "Updates",
  versions: "Versions",
  licenses: "Licenses",
  license: "License",
  search_modules: "Search modules",
  settings: "Settings",
  repository: "Repository",
  repositories: "Repositories",
  appearance: "Appearance",
  accent_color: "Accent color",
  language: "Language",
  dark_theme: "Dark theme",
  bottom_navigation_text: "Bottom navigation",
  bottom_navigation_subtext: "Moves tabs to the bottom of screen.",
  not_supported_in_web_version: "Not supported in web version",
  source_code: "Source code",
  acknowledgements: "Acknowledgements",
  issues: "Issues",
  download: "Download",
  install: "Install",
  update: "Update",
  explore: "Explore",
  installed: "Installed",
  remove: "Remove",
  restore: "Restore",
  module_enabled_LOG: "{name} has been enabled",
  module_disabled_LOG: "{name} has been disabled",
  add: "Add",
  cancel: "Cancel",
  confirm_repo_delete: "Are you sure to remove {name} repository?",
  submit_module: "Submit a module",
  donate: "Donate",
  support: "Support",
  website: "Website",
  no_root: "No Root",
  failed: "Failed",
  no_root_message: "Please make sure that you have at least one root manager, otherwise you can't use MMRL.",
  open_magisk: "Open Magisk",
  development: "Development",
  enabled: "Enabled",
  comments: "Comments",
  configureable: "Configureable",
  change_boot: "Changes boot",
  need_ramdisk: "Needs Ramdisk",
  add_repository: "Add Repository",
  add_repository_description: "Add your repository or an repository from some else.",
  explore_repositories: "Explore Repositories",
  overview: "Overview",
  about_this_module: "About this module",
  about: "About",
  updated_on: "Updated on",
  requirements: "Requirements",
  access: "Access",
  minimum: "Minimum",
  recommended: "Recommended",
  source: "Source",
  require_sdk: "Module requires {sdk}",
  unsupported: "Unsupported",
  images: "Images",
  unset: "Unset",
  yes: "Yes",
  no: "No",
  operating_sys: "Operating System",
  verified_module: "Verified module",
  verified_module_desc:
    "This module has undergone verification and has been confirmed as a trusted module developed by a reputable developer.",
  update_json: "Uses own update.json",
  update_json_desc: "This module utilizes its own update.json for updating and installation purposes.",
  shading: "Shading",
  shading_title: "Apply custom shading",
  shading_desc: "Use with care, if to dark you may not able to see the UI anymore.",
  module: "Module",
  swipeable_tabs: "Swipeable tabs",
  swipeable_tabs_subtitle: "Make all tabs swipeable. This make break user experience",
  low_quality_module: "Low quality module",
  low_quality_modules: "Low quality modules",
  low_quality_modules_subtitle: "Shows a alert below the module if it has a low quality",
  low_quality_module_warn:
    "This Magisk module is missing crucial properties, such as id, version, versionCode, author, etc., which may affect its functionality and origin.",
  invaild_modules: "Invaild modules",
  invaild_modules_subtitle: "Show invaild modules",
  // no translate
  modconf: "ModConf",
  modconf_playground: "ModConf Playground",
  // no translate
  modfs: "ModFS",
  enable_install: "Enable install",
  enable_install_subtitle: "Since 1.8.5 the MMRL Install Tools are required",
  scroll_to_bottom: "Scroll to bottom",
  scroll_to_bottom_subtitle: "Automatically scroll to bottom within the terminal",
  scroll_behavior: "Scroll behavior",
  terminal: "Terminal",
  eruda_console: "Eruda console",
  eruda_console_subtitle: "Useful for development and bug hunting",
  share_device_infos: "Share device information's",
  share_device_infos_subtilte: "Device specs, configured ModConf, app infos and installed modules",
  storage: "Storage",
  clear_repos: "Clear repositories",
  patch_settings: "Patch settings",
  patch_settings_subtitle: "Add missing settings keys",
  sticky_search_bar: "Disable sticky search bar",
  dm_update_json_fetch_warn: "{id} has empty „updateJson“ property or the link isn't valid",

  // Anti-Features
  antifeature: "Anti-Feature",
  antifeatures: "Anti-Features",
  AntiFeature_Ads_desc:
    "This Anti-Feature is applied to a module that contains advertising.\nNote that most modules that contain advertising are not Free Software because they use proprietary software (e.g., AdMob) to provide that advertising. Those modules will not be found in the repo at all, so the only time you would see this Anti-Feature applied would be a module that contains advertising without using Non-Free Software to do it.",
  AntiFeature_Tracking_desc:
    "This Anti-Feature is applied to modules that track you and/or report your activity to somewhere, either without your permission or by default (i.e., you'd have to actively seek out an option to disable it).",
  AntiFeature_NSFW_desc:
    "This Anti-Feature is applied to a module that contains content that the user may not want to be publicized or visible everywhere. The marked module may contain nudity, profanity, slurs, violence, intense sexuality, political incorrectness, or other potentially disturbing subject matter. This is especially relevant in environments like workplaces, schools, religious, and family settings. The name comes from the Internet term “Not safe for work.”",
  "AntiFeature_Non-Free Network Services_desc":
    "This Anti-Feature is applied to modules that promote or depend entirely on a Non-Free network service, which is impossible or not easy to replace. Replacement requires changes to the module or service. This anti-feature would not apply if there is a simple configuration option that allows pointing the module to a running instance of an alternative, publicly available, self-hostable, free software server solution.",
  "AntiFeature_Non-Free Addons_desc":
    "This Anti-Feature is applied to modules that, although Free Software themselves, promote other Non-Free applications or plugins.",
  "AntiFeature_Non-Free Dependencies_desc":
    "This Anti-Feature is applied to modules that require things that are not Free Software to run.\nThis does not mean that proprietary software is included in the module, but, for example, it may depend on other software already being installed on your device. A common example would be a module that doesn't run or is not useful unless you have Google Maps installed.",
  "AntiFeature_Upstream Non-Free_desc":
    "This Anti-Feature is applied to modules where the upstream source code includes proprietary software by default in their own releases.\nThis does not mean that proprietary software is included in the module. Most likely, the F-Droid build has been patched in some way to remove the Non-Free code/libraries, and/or some functionality may be missing. The module's description will usually go into more detail about this.\nIn our experience, where the upstream developer includes Non-Free libraries, sooner or later they will include more Non-Free libraries or other Anti-Features. Frequently, they become impossible to maintain/update in F-Droid. If there is an alternative, it is recommended that you avoid modules with this Anti-Feature if future updates are important to you.",
  "AntiFeature_Non-Free Assets_desc":
    "This Anti-Feature is applied to modules that contain and make use of Non-Free assets. The most common case is modules using artwork - images, sounds, music, etc. - under a license that restricts commercial usage or making derivative works (for example, any Creative Commons license with a “Non-Commercial” (NC) or “No Derivatives” (ND) restriction).",
  "AntiFeature_Known Vulnerability_desc": "This Anti-Feature is applied to modules with a known security vulnerability.",
  "AntiFeature_Disabled Algorithm_desc":
    "This Anti-Feature is applied to modules that were signed using a signature algorithm that is considered outdated or unsafe.",
  "AntiFeature_No Source Since_desc":
    "The upstream source for this module is no longer available. Either the module went proprietary, the source repository was dropped, or it has moved to a location currently not known to us. This means there will not be further updates unless the source reappears.",

  // Anchor link confirm
  anchor_confirm_title: "Leaving MMRL",
  anchor_confirm_desc: "This link is taking you the following website {codeblock}",
  link_protection_title: "Link protection",
  link_protection_desc: "Prevent link that are accidentally clicked with a extra confirm dialog. This setting also affects ModConf.",

  // modconf
  compile_error: "Compile error!",

  unverified_host: "Unverified host!",
  unverified_host_text:
    "You're accessing MMRL from {url} which isn't a verified host. Only use MMRL from it's origial source and not from thrid-party sources.",
  unverified_host_text_help: "Noticed any issues or you know that the accessed host safe for use is? Then report it under our {issues}",

  // terminal activity
  reboot_device: "Reboot device?",
  reboot_device_desc: "Are you sure to reboot your device?",
};
