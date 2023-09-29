import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Opcode Explained",
  description: "Documenting bitcoin opcodes",
  themeConfig: {
    nav: [
      { text: "Opcodes", link: "/opcodes/", activeMatch: "/opcodes/" },
      { text: "Extras", link: "/overview/script-success.md", activeMatch: "/overview" }
    ],

    sidebar: {
      "/opcodes/": [
        { text: "OP_0", link: "/opcodes/OP_0.md" },
        { text: "OP_PUSHBYTES_1", link: "/opcodes/OP_PUSHBYTES_1.md" },
        { text: "OP_PUSHBYTES_2", link: "/opcodes/OP_PUSHBYTES_2.md" },
        { text: "OP_PUSHBYTES_3", link: "/opcodes/OP_PUSHBYTES_3.md" },
        { text: "OP_PUSHBYTES_4", link: "/opcodes/OP_PUSHBYTES_4.md" },
        { text: "OP_PUSHBYTES_5", link: "/opcodes/OP_PUSHBYTES_5.md" },
        { text: "OP_PUSHBYTES_6", link: "/opcodes/OP_PUSHBYTES_6.md" },
        { text: "OP_PUSHBYTES_7", link: "/opcodes/OP_PUSHBYTES_7.md" },
        { text: "OP_PUSHBYTES_8", link: "/opcodes/OP_PUSHBYTES_8.md" },
        { text: "OP_PUSHBYTES_9", link: "/opcodes/OP_PUSHBYTES_9.md" },
        { text: "OP_PUSHBYTES_10", link: "/opcodes/OP_PUSHBYTES_10.md" },
        { text: "OP_PUSHBYTES_11", link: "/opcodes/OP_PUSHBYTES_11.md" },
        { text: "OP_PUSHBYTES_12", link: "/opcodes/OP_PUSHBYTES_12.md" },
        { text: "OP_PUSHBYTES_13", link: "/opcodes/OP_PUSHBYTES_13.md" },
        { text: "OP_PUSHBYTES_14", link: "/opcodes/OP_PUSHBYTES_14.md" },
        { text: "OP_PUSHBYTES_15", link: "/opcodes/OP_PUSHBYTES_15.md" },
        { text: "OP_PUSHBYTES_16", link: "/opcodes/OP_PUSHBYTES_16.md" },
        { text: "OP_PUSHBYTES_17", link: "/opcodes/OP_PUSHBYTES_17.md" },
        { text: "OP_PUSHBYTES_18", link: "/opcodes/OP_PUSHBYTES_18.md" },
        { text: "OP_PUSHBYTES_19", link: "/opcodes/OP_PUSHBYTES_19.md" },
        { text: "OP_PUSHBYTES_20", link: "/opcodes/OP_PUSHBYTES_20.md" },
        { text: "OP_PUSHBYTES_21", link: "/opcodes/OP_PUSHBYTES_21.md" },
        { text: "OP_PUSHBYTES_22", link: "/opcodes/OP_PUSHBYTES_22.md" },
        { text: "OP_PUSHBYTES_23", link: "/opcodes/OP_PUSHBYTES_23.md" },
        { text: "OP_PUSHBYTES_24", link: "/opcodes/OP_PUSHBYTES_24.md" },
        { text: "OP_PUSHBYTES_25", link: "/opcodes/OP_PUSHBYTES_25.md" },
        { text: "OP_PUSHBYTES_26", link: "/opcodes/OP_PUSHBYTES_26.md" },
        { text: "OP_PUSHBYTES_27", link: "/opcodes/OP_PUSHBYTES_27.md" },
        { text: "OP_PUSHBYTES_28", link: "/opcodes/OP_PUSHBYTES_28.md" },
        { text: "OP_PUSHBYTES_29", link: "/opcodes/OP_PUSHBYTES_29.md" },
        { text: "OP_PUSHBYTES_30", link: "/opcodes/OP_PUSHBYTES_30.md" },
        { text: "OP_PUSHBYTES_31", link: "/opcodes/OP_PUSHBYTES_31.md" },
        { text: "OP_PUSHBYTES_32", link: "/opcodes/OP_PUSHBYTES_32.md" },
        { text: "OP_PUSHBYTES_33", link: "/opcodes/OP_PUSHBYTES_33.md" },
        { text: "OP_PUSHBYTES_34", link: "/opcodes/OP_PUSHBYTES_34.md" },
        { text: "OP_PUSHBYTES_35", link: "/opcodes/OP_PUSHBYTES_35.md" },
        { text: "OP_PUSHBYTES_36", link: "/opcodes/OP_PUSHBYTES_36.md" },
        { text: "OP_PUSHBYTES_37", link: "/opcodes/OP_PUSHBYTES_37.md" },
        { text: "OP_PUSHBYTES_38", link: "/opcodes/OP_PUSHBYTES_38.md" },
        { text: "OP_PUSHBYTES_39", link: "/opcodes/OP_PUSHBYTES_39.md" },
        { text: "OP_PUSHBYTES_40", link: "/opcodes/OP_PUSHBYTES_40.md" },
        { text: "OP_PUSHBYTES_41", link: "/opcodes/OP_PUSHBYTES_41.md" },
        { text: "OP_PUSHBYTES_42", link: "/opcodes/OP_PUSHBYTES_42.md" },
        { text: "OP_PUSHBYTES_42", link: "/opcodes/OP_PUSHBYTES_42.md" },
        { text: "OP_PUSHBYTES_43", link: "/opcodes/OP_PUSHBYTES_43.md" },
        { text: "OP_PUSHBYTES_44", link: "/opcodes/OP_PUSHBYTES_44.md" },
        { text: "OP_PUSHBYTES_45", link: "/opcodes/OP_PUSHBYTES_45.md" },
        { text: "OP_PUSHBYTES_46", link: "/opcodes/OP_PUSHBYTES_46.md" },
        { text: "OP_PUSHBYTES_47", link: "/opcodes/OP_PUSHBYTES_47.md" },
        { text: "OP_PUSHBYTES_48", link: "/opcodes/OP_PUSHBYTES_48.md" },
        { text: "OP_PUSHBYTES_49", link: "/opcodes/OP_PUSHBYTES_49.md" },
        { text: "OP_PUSHBYTES_50", link: "/opcodes/OP_PUSHBYTES_50.md" },
        { text: "OP_PUSHBYTES_51", link: "/opcodes/OP_PUSHBYTES_51.md" },
        { text: "OP_PUSHBYTES_52", link: "/opcodes/OP_PUSHBYTES_52.md" },
        { text: "OP_PUSHBYTES_53", link: "/opcodes/OP_PUSHBYTES_53.md" },
        { text: "OP_PUSHBYTES_54", link: "/opcodes/OP_PUSHBYTES_54.md" },
        { text: "OP_PUSHBYTES_55", link: "/opcodes/OP_PUSHBYTES_55.md" },
        { text: "OP_PUSHBYTES_56", link: "/opcodes/OP_PUSHBYTES_56.md" },
        { text: "OP_PUSHBYTES_57", link: "/opcodes/OP_PUSHBYTES_57.md" },
        { text: "OP_PUSHBYTES_58", link: "/opcodes/OP_PUSHBYTES_58.md" },
        { text: "OP_PUSHBYTES_59", link: "/opcodes/OP_PUSHBYTES_59.md" },
        { text: "OP_PUSHBYTES_60", link: "/opcodes/OP_PUSHBYTES_60.md" },
        { text: "OP_PUSHBYTES_61", link: "/opcodes/OP_PUSHBYTES_61.md" },
        { text: "OP_PUSHBYTES_62", link: "/opcodes/OP_PUSHBYTES_62.md" },
        { text: "OP_PUSHBYTES_63", link: "/opcodes/OP_PUSHBYTES_63.md" },
        { text: "OP_PUSHBYTES_64", link: "/opcodes/OP_PUSHBYTES_64.md" },
        { text: "OP_PUSHBYTES_65", link: "/opcodes/OP_PUSHBYTES_65.md" },
        { text: "OP_PUSHBYTES_66", link: "/opcodes/OP_PUSHBYTES_66.md" },
        { text: "OP_PUSHBYTES_67", link: "/opcodes/OP_PUSHBYTES_67.md" },
        { text: "OP_PUSHBYTES_68", link: "/opcodes/OP_PUSHBYTES_68.md" },
        { text: "OP_PUSHBYTES_68", link: "/opcodes/OP_PUSHBYTES_68.md" },
        { text: "OP_PUSHBYTES_69", link: "/opcodes/OP_PUSHBYTES_69.md" },
        { text: "OP_PUSHBYTES_70", link: "/opcodes/OP_PUSHBYTES_70.md" },
        { text: "OP_PUSHBYTES_71", link: "/opcodes/OP_PUSHBYTES_71.md" },
        { text: "OP_PUSHBYTES_72", link: "/opcodes/OP_PUSHBYTES_72.md" },
        { text: "OP_PUSHBYTES_73", link: "/opcodes/OP_PUSHBYTES_73.md" },
        { text: "OP_PUSHBYTES_74", link: "/opcodes/OP_PUSHBYTES_74.md" },
        { text: "OP_PUSHBYTES_75", link: "/opcodes/OP_PUSHBYTES_75.md" },
        { text: "OP_PUSHDATA1", link: "/opcodes/OP_PUSHDATA1.md" },
        { text: "OP_PUSHDATA2", link: "/opcodes/OP_PUSHDATA2.md" },
        { text: "OP_PUSHDATA4", link: "/opcodes/OP_PUSHDATA4.md" },
        { text: "OP_1NEGATE", link: "/opcodes/OP_1NEGATE.md" },
        { text: "OP_RESERVED", link: "/opcodes/OP_RESERVED.md" },
        { text: "OP_1", link: "/opcodes/OP_1.md" },
        { text: "OP_2", link: "/opcodes/OP_2.md" },
        { text: "OP_3", link: "/opcodes/OP_3.md" },
        { text: "OP_4", link: "/opcodes/OP_4.md" },
        { text: "OP_5", link: "/opcodes/OP_5.md" },
        { text: "OP_6", link: "/opcodes/OP_6.md" },
        { text: "OP_7", link: "/opcodes/OP_7.md" },
        { text: "OP_8", link: "/opcodes/OP_8.md" },
        { text: "OP_9", link: "/opcodes/OP_9.md" },
        { text: "OP_10", link: "/opcodes/OP_10.md" },
        { text: "OP_11", link: "/opcodes/OP_11.md" },
        { text: "OP_12", link: "/opcodes/OP_12.md" },
        { text: "OP_13", link: "/opcodes/OP_13.md" },
        { text: "OP_14", link: "/opcodes/OP_14.md" },
        { text: "OP_15", link: "/opcodes/OP_15.md" },
        { text: "OP_16", link: "/opcodes/OP_16.md" },
        { text: "OP_ADD", link: "/opcodes/OP_ADD.md" },
      ],
      
      "/overview/": [
        { text: "Bitcoin Script Success/Failure", link: "/overview/script-success.md" },
        { text: "ASM Representation", link: "/overview/asm.md" },
        { text: "Numbers in Script", link: "/overview/numbers.md" },
      ]
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/thunderbiscuit/opcode-explained" }
    ]
  }
})
