
/*
Code generated with Faust version 2.49.1
Compilation options: -lang wasm-ib -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONhearingLossSim() {
	return '{"name": "hearingLossSim","filename": "hearingLossSim.dsp","version": "2.49.1","compile_options": "-lang wasm-ib -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/5AF88CE5DF6A38246B9A2DA062D9647A0B21602D/web/wap"],"size": 208,"inputs": 1,"outputs": 1,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.8" },{ "compile_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "filename": "hearingLossSim.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_peak_eq_author": "Julius O. Smith III" },{ "filters_lib_peak_eq_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_peak_eq_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/filters.lib" },{ "library_path2": "/libraries/basics.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "hearingLossSim" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "version": "2.50.2" }],"ui": [ {"type": "hgroup","label": "main","items": [ {"type": "vgroup","label": "band0","items": [ {"type": "vslider","label": "frequency","shortname": "band0_frequency","address": "/main/band0/frequency","index": 104,"meta": [{ "0": "" },{ "style": "knob" }],"init": 125,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band0_bandw","address": "/main/band0/bandw","index": 108,"meta": [{ "style": "knob" }],"init": 50,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band0_level","address": "/main/band0/level","index": 100,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band1","items": [ {"type": "vslider","label": "frequency","shortname": "band1_frequency","address": "/main/band1/frequency","index": 92,"meta": [{ "0": "" },{ "style": "knob" }],"init": 250,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band1_bandw","address": "/main/band1/bandw","index": 96,"meta": [{ "style": "knob" }],"init": 50,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band1_level","address": "/main/band1/level","index": 88,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band2","items": [ {"type": "vslider","label": "frequency","shortname": "band2_frequency","address": "/main/band2/frequency","index": 80,"meta": [{ "0": "" },{ "style": "knob" }],"init": 500,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band2_bandw","address": "/main/band2/bandw","index": 84,"meta": [{ "style": "knob" }],"init": 63.2456,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band2_level","address": "/main/band2/level","index": 76,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band3","items": [ {"type": "vslider","label": "frequency","shortname": "band3_frequency","address": "/main/band3/frequency","index": 68,"meta": [{ "0": "" },{ "style": "knob" }],"init": 1000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band3_bandw","address": "/main/band3/bandw","index": 72,"meta": [{ "style": "knob" }],"init": 89.4427,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band3_level","address": "/main/band3/level","index": 64,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band4","items": [ {"type": "vslider","label": "frequency","shortname": "band4_frequency","address": "/main/band4/frequency","index": 56,"meta": [{ "0": "" },{ "style": "knob" }],"init": 2000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band4_bandw","address": "/main/band4/bandw","index": 60,"meta": [{ "style": "knob" }],"init": 126.491,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band4_level","address": "/main/band4/level","index": 52,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band5","items": [ {"type": "vslider","label": "frequency","shortname": "band5_frequency","address": "/main/band5/frequency","index": 44,"meta": [{ "0": "" },{ "style": "knob" }],"init": 4000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band5_bandw","address": "/main/band5/bandw","index": 48,"meta": [{ "style": "knob" }],"init": 178.885,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band5_level","address": "/main/band5/level","index": 40,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band6","items": [ {"type": "vslider","label": "frequency","shortname": "band6_frequency","address": "/main/band6/frequency","index": 32,"meta": [{ "0": "" },{ "style": "knob" }],"init": 8000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band6_bandw","address": "/main/band6/bandw","index": 36,"meta": [{ "style": "knob" }],"init": 252.982,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band6_level","address": "/main/band6/level","index": 28,"init": 0,"min": -90,"max": 12,"step": 0.01}]},{"type": "vgroup","label": "band7","items": [ {"type": "vslider","label": "frequency","shortname": "band7_frequency","address": "/main/band7/frequency","index": 4,"meta": [{ "0": "" },{ "style": "knob" }],"init": 16000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band7_bandw","address": "/main/band7/bandw","index": 16,"meta": [{ "style": "knob" }],"init": 357.771,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band7_level","address": "/main/band7/level","index": 0,"init": 0,"min": -90,"max": 12,"step": 0.01}]}]}]}';
}
function getBase64CodehearingLossSim() { return "AGFzbQEAAAAB24CAgAARYAJ/fwBgBH9/f38AYAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gAn19AX1gA39/fQBgAX0BfWABfQF9AqWAgIAAAwNlbnYFX3Bvd2YADQNlbnYFX3NpbmYADwNlbnYFX3RhbmYAEAOPgICAAA4AAQIDBAUGBwgJCgsMDgWMgICAAAEBgoCAgADqh4CAAAe6gYCAAAwHY29tcHV0ZQAEDGdldE51bUlucHV0cwAFDWdldE51bU91dHB1dHMABg1nZXRQYXJhbVZhbHVlAAcNZ2V0U2FtcGxlUmF0ZQAIBGluaXQACQ1pbnN0YW5jZUNsZWFyAAoRaW5zdGFuY2VDb25zdGFudHMACwxpbnN0YW5jZUluaXQADBppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQANDXNldFBhcmFtVmFsdWUAEAZtZW1vcnkCAArYpICAAA6CgICAAAALyJ2AgAACC3+IAX1BACEEQQAhBUMAAAAAIQ9BACEGQwAAAAAhEEMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1BACEHQwAAAAAhHkMAAAAAIR9DAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStBACEIQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlBACEJQwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QwAAAAAhQEMAAAAAIUFDAAAAACFCQwAAAAAhQ0MAAAAAIURDAAAAACFFQwAAAAAhRkMAAAAAIUdBACEKQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVBACELQwAAAAAhVkMAAAAAIVdDAAAAACFYQwAAAAAhWUMAAAAAIVpDAAAAACFbQwAAAAAhXEMAAAAAIV1DAAAAACFeQwAAAAAhX0MAAAAAIWBDAAAAACFhQwAAAAAhYkMAAAAAIWNBACEMQwAAAAAhZEMAAAAAIWVDAAAAACFmQwAAAAAhZ0MAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQwAAAAAhcEMAAAAAIXFBACENQwAAAAAhckMAAAAAIXNDAAAAACF0QwAAAAAhdUMAAAAAIXZDAAAAACF3QwAAAAAheEMAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9QwAAAAAhfkMAAAAAIX9DAAAAACGAAUMAAAAAIYEBQwAAAAAhggFDAAAAACGDAUMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUEAIQ5DAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWASACQQBqKAIAIQQgA0EAaigCACEFQQAqAgAhDyAPQwAAAABeIQZBACoCBCEQQQAqAgwgEJQQASERQQAqAhAhEkEAKgIUIBJDAAAgQUPNzEw9IA+LlBAAlCARlZQhE0EAKgIUIBIgEZWUIRQgBgR9IBQFIBMLIRVBACoCGCAQlBACIRZDAACAPyAWlSEXIBcgFyAVkpRDAACAP5IhGCAGBH0gEwUgFAshGSAXIBcgGZOUQwAAgD+SIRpDAAAAQEMAAIA/QwAAgD8gFkMAAABAEACVk5QhGyAXIBcgFZOUQwAAgD+SIRxBACoCHCEdIB1DAAAAAF4hB0EAKgIgIR5BACoCDCAelBABIR9BACoCJCEgQQAqAhQgIEMAACBBQ83MTD0gHYuUEACUIB+VlCEhQQAqAhQgICAflZQhIiAHBH0gIgUgIQshI0EAKgIYIB6UEAIhJEMAAIA/ICSVISUgJSAlICOSlEMAAIA/kiEmIAcEfSAhBSAiCyEnICUgJSAnk5RDAACAP5IhKEMAAABAQwAAgD9DAACAPyAkQwAAAEAQAJWTlCEpICUgJSAjk5RDAACAP5IhKkEAKgIoISsgK0MAAAAAXiEIQQAqAiwhLEEAKgIMICyUEAEhLUEAKgIwIS5BACoCFCAuQwAAIEFDzcxMPSAri5QQAJQgLZWUIS9BACoCFCAuIC2VlCEwIAgEfSAwBSAvCyExQQAqAhggLJQQAiEyQwAAgD8gMpUhMyAzIDMgMZKUQwAAgD+SITQgCAR9IC8FIDALITUgMyAzIDWTlEMAAIA/kiE2QwAAAEBDAACAP0MAAIA/IDJDAAAAQBAAlZOUITcgMyAzIDGTlEMAAIA/kiE4QQAqAjQhOSA5QwAAAABeIQlBACoCOCE6QQAqAgwgOpQQASE7QQAqAjwhPEEAKgIUIDxDAAAgQUPNzEw9IDmLlBAAlCA7lZQhPUEAKgIUIDwgO5WUIT4gCQR9ID4FID0LIT9BACoCGCA6lBACIUBDAACAPyBAlSFBIEEgQSA/kpRDAACAP5IhQiAJBH0gPQUgPgshQyBBIEEgQ5OUQwAAgD+SIURDAAAAQEMAAIA/QwAAgD8gQEMAAABAEACVk5QhRSBBIEEgP5OUQwAAgD+SIUZBACoCQCFHIEdDAAAAAF4hCkEAKgJEIUhBACoCDCBIlBABIUlBACoCSCFKQQAqAhQgSkMAACBBQ83MTD0gR4uUEACUIEmVlCFLQQAqAhQgSiBJlZQhTCAKBH0gTAUgSwshTUEAKgIYIEiUEAIhTkMAAIA/IE6VIU8gTyBPIE2SlEMAAIA/kiFQIAoEfSBLBSBMCyFRIE8gTyBRk5RDAACAP5IhUkMAAABAQwAAgD9DAACAPyBOQwAAAEAQAJWTlCFTIE8gTyBNk5RDAACAP5IhVEEAKgJMIVUgVUMAAAAAXiELQQAqAlAhVkEAKgIMIFaUEAEhV0EAKgJUIVhBACoCFCBYQwAAIEFDzcxMPSBVi5QQAJQgV5WUIVlBACoCFCBYIFeVlCFaIAsEfSBaBSBZCyFbQQAqAhggVpQQAiFcQwAAgD8gXJUhXSBdIF0gW5KUQwAAgD+SIV4gCwR9IFkFIFoLIV8gXSBdIF+TlEMAAIA/kiFgQwAAAEBDAACAP0MAAIA/IFxDAAAAQBAAlZOUIWEgXSBdIFuTlEMAAIA/kiFiQQAqAlghYyBjQwAAAABeIQxBACoCXCFkQQAqAgwgZJQQASFlQQAqAmAhZkEAKgIUIGZDAAAgQUPNzEw9IGOLlBAAlCBllZQhZ0EAKgIUIGYgZZWUIWggDAR9IGgFIGcLIWlBACoCGCBklBACIWpDAACAPyBqlSFrIGsgayBpkpRDAACAP5IhbCAMBH0gZwUgaAshbSBrIGsgbZOUQwAAgD+SIW5DAAAAQEMAAIA/QwAAgD8gakMAAABAEACVk5QhbyBrIGsgaZOUQwAAgD+SIXBBACoCZCFxIHFDAAAAAF4hDUEAKgJoIXJBACoCDCBylBABIXNBACoCbCF0QQAqAhQgdEMAACBBQ83MTD0gcYuUEACUIHOVlCF1QQAqAhQgdCBzlZQhdiANBH0gdgUgdQshd0EAKgIYIHKUEAIheEMAAIA/IHiVIXkgeSB5IHeSlEMAAIA/kiF6IA0EfSB1BSB2CyF7IHkgeSB7k5RDAACAP5IhfEMAAABAQwAAgD9DAACAPyB4QwAAAEAQAJWTlCF9IHkgeSB3k5RDAACAP5IhfiB5IHkge5KUQwAAgD+SIX8gayBrIG2SlEMAAIA/kiGAASBdIF0gX5KUQwAAgD+SIYEBIE8gTyBRkpRDAACAP5IhggEgQSBBIEOSlEMAAIA/kiGDASAzIDMgNZKUQwAAgD+SIYQBICUgJSAnkpRDAACAP5IhhQEgFyAXIBmSlEMAAIA/kiGGAUEAIQ4DQAJAIBtBACoCyAGUIYcBIClBACoCvAGUIYgBIDdBACoCsAGUIYkBIEVBACoCpAGUIYoBIFNBACoCmAGUIYsBIGFBACoCjAGUIYwBIG9BACoCgAGUIY0BIH1BACoCdJQhjgEgBCAOaioCAEEAKgJ4IH6UII4BkiB6lZMhjwFBACCPAbxBgICA/AdxBH0gjwEFQwAAAAALOAJwII4BQQAqAnAgf5SSQQAqAnggfJSSIHqVQQAqAoQBIHCUII0BkiBslZMhkAFBACCQAbxBgICA/AdxBH0gkAEFQwAAAAALOAJ8II0BQQAqAnwggAGUkkEAKgKEASBulJIgbJVBACoCkAEgYpQgjAGSIF6VkyGRAUEAIJEBvEGAgID8B3EEfSCRAQVDAAAAAAs4AogBIIwBQQAqAogBIIEBlJJBACoCkAEgYJSSIF6VQQAqApwBIFSUIIsBkiBQlZMhkgFBACCSAbxBgICA/AdxBH0gkgEFQwAAAAALOAKUASCLAUEAKgKUASCCAZSSQQAqApwBIFKUkiBQlUEAKgKoASBGlCCKAZIgQpWTIZMBQQAgkwG8QYCAgPwHcQR9IJMBBUMAAAAACzgCoAEgigFBACoCoAEggwGUkkEAKgKoASBElJIgQpVBACoCtAEgOJQgiQGSIDSVkyGUAUEAIJQBvEGAgID8B3EEfSCUAQVDAAAAAAs4AqwBIIkBQQAqAqwBIIQBlJJBACoCtAEgNpSSIDSVQQAqAsABICqUIIgBkiAmlZMhlQFBACCVAbxBgICA/AdxBH0glQEFQwAAAAALOAK4ASCIAUEAKgK4ASCFAZSSQQAqAsABICiUkiAmlUEAKgLMASAclCCHAZIgGJWTIZYBQQAglgG8QYCAgPwHcQR9IJYBBUMAAAAACzgCxAEgBSAOaiCHAUEAKgLEASCGAZSSQQAqAswBIBqUkiAYlTgCAEEAQQAqAnQ4AnhBAEEAKgJwOAJ0QQBBACoCgAE4AoQBQQBBACoCfDgCgAFBAEEAKgKMATgCkAFBAEEAKgKIATgCjAFBAEEAKgKYATgCnAFBAEEAKgKUATgCmAFBAEEAKgKkATgCqAFBAEEAKgKgATgCpAFBAEEAKgKwATgCtAFBAEEAKgKsATgCsAFBAEEAKgK8ATgCwAFBAEEAKgK4ATgCvAFBAEEAKgLIATgCzAFBAEEAKgLEATgCyAEgDkEEaiEOIA5BBCABbEgEQAwCDAELCwsLhYCAgAAAQQEPC4WAgIAAAEEBDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAggPC46AgIAAACAAIAEQAyAAIAEQDAuUg4CAAAEIf0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhAQNAAkBB8AAgAUECdGpDAAAAADgCACABQQFqIQEgAUEDSARADAIMAQsLC0EAIQIDQAJAQfwAIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBA0gEQAwCDAELCwtBACEDA0ACQEGIASADQQJ0akMAAAAAOAIAIANBAWohAyADQQNIBEAMAgwBCwsLQQAhBANAAkBBlAEgBEECdGpDAAAAADgCACAEQQFqIQQgBEEDSARADAIMAQsLC0EAIQUDQAJAQaABIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBA0gEQAwCDAELCwtBACEGA0ACQEGsASAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQNIBEAMAgwBCwsLQQAhBwNAAkBBuAEgB0ECdGpDAAAAADgCACAHQQFqIQcgB0EDSARADAIMAQsLC0EAIQgDQAJAQcQBIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBA0gEQAwCDAELCwsL2oCAgAABAX1DAIA7SEMAAIA/QQAoAgiyl5YhAkEAIAE2AghDAIA7SEMAAIA/QQAoAgiyl5YhAkEAQ9sPyUAgApU4AgxBAEPbD0lAIAKVOAIUQQBD2w9JQCAClTgCGAuQgICAAAAgACABEAsgABANIAAQCgvygYCAAABBAEMAAAAAOAIAQQBDAAB6RjgCBEEAQ6ziskM4AhBBAEMAAAAAOAIcQQBDAAD6RTgCIEEAQ3L7fEM4AiRBAEMAAAAAOAIoQQBDAAB6RTgCLEEAQ6ziMkM4AjBBAEMAAAAAOAI0QQBDAAD6RDgCOEEAQ3L7/EI4AjxBAEMAAAAAOAJAQQBDAAB6RDgCREEAQ6ziskI4AkhBAEMAAAAAOAJMQQBDAAD6QzgCUEEAQ3L7fEI4AlRBAEMAAAAAOAJYQQBDAAB6QzgCXEEAQwAASEI4AmBBAEMAAAAAOAJkQQBDAAD6QjgCaEEAQwAASEI4AmwLkICAgAAAIAAgAUgEfyABBSAACw8LkICAgAAAIAAgAUgEfyAABSABCw8LjICAgAAAIAAgAWogAjgCAAsLw7iAgAABAEEAC7w4eyJuYW1lIjogImhlYXJpbmdMb3NzU2ltIiwiZmlsZW5hbWUiOiAiaGVhcmluZ0xvc3NTaW0uZHNwIiwidmVyc2lvbiI6ICIyLjQ5LjEiLCJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pYiAtY24gaGVhcmluZ0xvc3NTaW0gLWVzIDEgLW1jZCAxNiAtc2luZ2xlIC1mdHogMiIsImluY2x1ZGVfcGF0aG5hbWVzIjogWyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIuIiwiL3RtcC9zZXNzaW9ucy81QUY4OENFNURGNkEzODI0NkI5QTJEQTA2MkQ5NjQ3QTBCMjE2MDJEL3dlYi93YXAiXSwic2l6ZSI6IDIwOCwiaW5wdXRzIjogMSwib3V0cHV0cyI6IDEsIm1ldGEiOiBbIHsgImJhc2ljc19saWJfbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzX2xpYl92ZXJzaW9uIjogIjAuOCIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiZmlsZW5hbWUiOiAiaGVhcmluZ0xvc3NTaW0uZHNwIiB9LHsgImZpbHRlcnNfbGliX2Zpcl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2Zpcl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfaWlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2lpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfaWlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfcGVha19lcV9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9wZWFrX2VxX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9wZWFrX2VxX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfdGYyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX3RmMnNfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfdGYyc19jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfdGYyc19saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAibGlicmFyeV9wYXRoMCI6ICIvbGlicmFyaWVzL3N0ZGZhdXN0LmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgxIjogIi9saWJyYXJpZXMvZmlsdGVycy5saWIiIH0seyAibGlicmFyeV9wYXRoMiI6ICIvbGlicmFyaWVzL2Jhc2ljcy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL21hdGhzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg0IjogIi9saWJyYXJpZXMvcGxhdGZvcm0ubGliIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjUiIH0seyAibmFtZSI6ICJoZWFyaW5nTG9zc1NpbSIgfSx7ICJwbGF0Zm9ybV9saWJfbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiIH0seyAicGxhdGZvcm1fbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgInZlcnNpb24iOiAiMi41MC4yIiB9XSwidWkiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJtYWluIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJiYW5kMCIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImZyZXF1ZW5jeSIsInNob3J0bmFtZSI6ICJiYW5kMF9mcmVxdWVuY3kiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQwL2ZyZXF1ZW5jeSIsImluZGV4IjogMTA0LCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMTI1LCJtaW4iOiA1MCwibWF4IjogMjAwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiYmFuZHciLCJzaG9ydG5hbWUiOiAiYmFuZDBfYmFuZHciLCJhZGRyZXNzIjogIi9tYWluL2JhbmQwL2JhbmR3IiwiaW5kZXgiOiAxMDgsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiA1MCwibWluIjogMjAsIm1heCI6IDEwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAibGV2ZWwiLCJzaG9ydG5hbWUiOiAiYmFuZDBfbGV2ZWwiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQwL2xldmVsIiwiaW5kZXgiOiAxMDAsImluaXQiOiAwLCJtaW4iOiAtOTAsIm1heCI6IDEyLCJzdGVwIjogMC4wMX1dfSx7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiYmFuZDEiLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJmcmVxdWVuY3kiLCJzaG9ydG5hbWUiOiAiYmFuZDFfZnJlcXVlbmN5IiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kMS9mcmVxdWVuY3kiLCJpbmRleCI6IDkyLCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMjUwLCJtaW4iOiA1MCwibWF4IjogMjAwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiYmFuZHciLCJzaG9ydG5hbWUiOiAiYmFuZDFfYmFuZHciLCJhZGRyZXNzIjogIi9tYWluL2JhbmQxL2JhbmR3IiwiaW5kZXgiOiA5NiwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDUwLCJtaW4iOiAyMCwibWF4IjogMTAwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJsZXZlbCIsInNob3J0bmFtZSI6ICJiYW5kMV9sZXZlbCIsImFkZHJlc3MiOiAiL21haW4vYmFuZDEvbGV2ZWwiLCJpbmRleCI6IDg4LCJpbml0IjogMCwibWluIjogLTkwLCJtYXgiOiAxMiwic3RlcCI6IDAuMDF9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImJhbmQyIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiZnJlcXVlbmN5Iiwic2hvcnRuYW1lIjogImJhbmQyX2ZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL21haW4vYmFuZDIvZnJlcXVlbmN5IiwiaW5kZXgiOiA4MCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDUwMCwibWluIjogNTAsIm1heCI6IDIwMDAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImJhbmR3Iiwic2hvcnRuYW1lIjogImJhbmQyX2JhbmR3IiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kMi9iYW5kdyIsImluZGV4IjogODQsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiA2My4yNDU2LCJtaW4iOiAyMCwibWF4IjogMTAwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJsZXZlbCIsInNob3J0bmFtZSI6ICJiYW5kMl9sZXZlbCIsImFkZHJlc3MiOiAiL21haW4vYmFuZDIvbGV2ZWwiLCJpbmRleCI6IDc2LCJpbml0IjogMCwibWluIjogLTkwLCJtYXgiOiAxMiwic3RlcCI6IDAuMDF9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImJhbmQzIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiZnJlcXVlbmN5Iiwic2hvcnRuYW1lIjogImJhbmQzX2ZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL21haW4vYmFuZDMvZnJlcXVlbmN5IiwiaW5kZXgiOiA2OCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDEwMDAsIm1pbiI6IDUwLCJtYXgiOiAyMDAwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJiYW5kdyIsInNob3J0bmFtZSI6ICJiYW5kM19iYW5kdyIsImFkZHJlc3MiOiAiL21haW4vYmFuZDMvYmFuZHciLCJpbmRleCI6IDcyLCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogODkuNDQyNywibWluIjogMjAsIm1heCI6IDEwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAibGV2ZWwiLCJzaG9ydG5hbWUiOiAiYmFuZDNfbGV2ZWwiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQzL2xldmVsIiwiaW5kZXgiOiA2NCwiaW5pdCI6IDAsIm1pbiI6IC05MCwibWF4IjogMTIsInN0ZXAiOiAwLjAxfV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJiYW5kNCIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImZyZXF1ZW5jeSIsInNob3J0bmFtZSI6ICJiYW5kNF9mcmVxdWVuY3kiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQ0L2ZyZXF1ZW5jeSIsImluZGV4IjogNTYsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAyMDAwLCJtaW4iOiA1MCwibWF4IjogMjAwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiYmFuZHciLCJzaG9ydG5hbWUiOiAiYmFuZDRfYmFuZHciLCJhZGRyZXNzIjogIi9tYWluL2JhbmQ0L2JhbmR3IiwiaW5kZXgiOiA2MCwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDEyNi40OTEsIm1pbiI6IDIwLCJtYXgiOiAxMDAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImxldmVsIiwic2hvcnRuYW1lIjogImJhbmQ0X2xldmVsIiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kNC9sZXZlbCIsImluZGV4IjogNTIsImluaXQiOiAwLCJtaW4iOiAtOTAsIm1heCI6IDEyLCJzdGVwIjogMC4wMX1dfSx7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiYmFuZDUiLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJmcmVxdWVuY3kiLCJzaG9ydG5hbWUiOiAiYmFuZDVfZnJlcXVlbmN5IiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kNS9mcmVxdWVuY3kiLCJpbmRleCI6IDQ0LCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogNDAwMCwibWluIjogNTAsIm1heCI6IDIwMDAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImJhbmR3Iiwic2hvcnRuYW1lIjogImJhbmQ1X2JhbmR3IiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kNS9iYW5kdyIsImluZGV4IjogNDgsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAxNzguODg1LCJtaW4iOiAyMCwibWF4IjogMTAwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJsZXZlbCIsInNob3J0bmFtZSI6ICJiYW5kNV9sZXZlbCIsImFkZHJlc3MiOiAiL21haW4vYmFuZDUvbGV2ZWwiLCJpbmRleCI6IDQwLCJpbml0IjogMCwibWluIjogLTkwLCJtYXgiOiAxMiwic3RlcCI6IDAuMDF9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImJhbmQ2IiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiZnJlcXVlbmN5Iiwic2hvcnRuYW1lIjogImJhbmQ2X2ZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL21haW4vYmFuZDYvZnJlcXVlbmN5IiwiaW5kZXgiOiAzMiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDgwMDAsIm1pbiI6IDUwLCJtYXgiOiAyMDAwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJiYW5kdyIsInNob3J0bmFtZSI6ICJiYW5kNl9iYW5kdyIsImFkZHJlc3MiOiAiL21haW4vYmFuZDYvYmFuZHciLCJpbmRleCI6IDM2LCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMjUyLjk4MiwibWluIjogMjAsIm1heCI6IDEwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAibGV2ZWwiLCJzaG9ydG5hbWUiOiAiYmFuZDZfbGV2ZWwiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQ2L2xldmVsIiwiaW5kZXgiOiAyOCwiaW5pdCI6IDAsIm1pbiI6IC05MCwibWF4IjogMTIsInN0ZXAiOiAwLjAxfV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJiYW5kNyIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImZyZXF1ZW5jeSIsInNob3J0bmFtZSI6ICJiYW5kN19mcmVxdWVuY3kiLCJhZGRyZXNzIjogIi9tYWluL2JhbmQ3L2ZyZXF1ZW5jeSIsImluZGV4IjogNCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDE2MDAwLCJtaW4iOiA1MCwibWF4IjogMjAwMDAsInN0ZXAiOiAwLjF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiYmFuZHciLCJzaG9ydG5hbWUiOiAiYmFuZDdfYmFuZHciLCJhZGRyZXNzIjogIi9tYWluL2JhbmQ3L2JhbmR3IiwiaW5kZXgiOiAxNiwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDM1Ny43NzEsIm1pbiI6IDIwLCJtYXgiOiAxMDAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImxldmVsIiwic2hvcnRuYW1lIjogImJhbmQ3X2xldmVsIiwiYWRkcmVzcyI6ICIvbWFpbi9iYW5kNy9sZXZlbCIsImluZGV4IjogMCwiaW5pdCI6IDAsIm1pbiI6IC05MCwibWF4IjogMTIsInN0ZXAiOiAwLjAxfV19XX1dfQ=="; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class hearingLossSimNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'hearingLossSim', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, hearingLossSimNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, hearingLossSimNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class hearingLossSim {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "hearingLossSim.wasm" : (this.baseURL + "/hearingLossSim.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let hearingLossSimProcessorString1 = hearingLossSimProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([hearingLossSimProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new hearingLossSimNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from hearingLossSim-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createhearingLossSimGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createhearingLossSimGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let hearingLossSimProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class hearingLossSimProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                hearingLossSimProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                hearingLossSimProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                hearingLossSimProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                hearingLossSimProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            hearingLossSimProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, hearingLossSimProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.hearingLossSim_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.hearingLossSim_instance.exports;
            this.HEAP = this.hearingLossSim_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                hearingLossSimProcessor.parse_ui(this.json_object.ui, this, hearingLossSimProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('hearingLossSim', hearingLossSimProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "hearingLossSim";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.hearingLossSim = hearingLossSim;
    window.FausthearingLossSim = hearingLossSim;
    window[dspName] = hearingLossSim;
} else {
    module.exports = { hearingLossSim };
}
