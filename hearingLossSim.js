
/*
Code generated with Faust version 2.49.1
Compilation options: -lang wasm -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONhearingLossSim() {
	return '{"name": "hearingLossSim","filename": "hearingLossSim.dsp","version": "2.49.1","compile_options": "-lang wasm -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/D1D0C0C5F99FBA1A17D868BE3866E5F773648B0C/web/wasmjs"],"size": 632,"inputs": 1,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.8" },{ "compile_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "filename": "hearingLossSim.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_peak_eq_author": "Julius O. Smith III" },{ "filters_lib_peak_eq_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_peak_eq_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/filters.lib" },{ "library_path2": "/libraries/basics.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "hearingLossSim" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "version": "2.50.2" }],"ui": [ {"type": "vgroup","label": "hearingLossSim","items": [ {"type": "button","label": "Normal hearing","shortname": "Normal_hearing","address": "/hearingLossSim/Normal_hearing","index": 296,"meta": [{ "0": "" }]},{"type": "button","label": "Medium hearing loss","shortname": "Medium_hearing_loss","address": "/hearingLossSim/Medium_hearing_loss","index": 628,"meta": [{ "1": "" }]},{"type": "button","label": "Severe hearing loss","shortname": "Severe_hearing_loss","address": "/hearingLossSim/Severe_hearing_loss","index": 292,"meta": [{ "2": "" }]},{"type": "checkbox","label": "Adjust parameters","shortname": "Adjust_parameters","address": "/hearingLossSim/Adjust_parameters","index": 528,"meta": [{ "3": "" }]},{"type": "hgroup","label": "main","items": [ {"type": "vgroup","label": "band0","items": [ {"type": "vslider","label": "frequency","shortname": "band0_frequency","address": "/hearingLossSim/main/band0/frequency","index": 412,"meta": [{ "0": "" },{ "style": "knob" }],"init": 125,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band0_bandw","address": "/hearingLossSim/main/band0/bandw","index": 416,"meta": [{ "style": "knob" }],"init": 50,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band0_level","address": "/hearingLossSim/main/band0/level","index": 408,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band1","items": [ {"type": "vslider","label": "frequency","shortname": "band1_frequency","address": "/hearingLossSim/main/band1/frequency","index": 400,"meta": [{ "0": "" },{ "style": "knob" }],"init": 250,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band1_bandw","address": "/hearingLossSim/main/band1/bandw","index": 404,"meta": [{ "style": "knob" }],"init": 50,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band1_level","address": "/hearingLossSim/main/band1/level","index": 396,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band2","items": [ {"type": "vslider","label": "frequency","shortname": "band2_frequency","address": "/hearingLossSim/main/band2/frequency","index": 388,"meta": [{ "0": "" },{ "style": "knob" }],"init": 500,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band2_bandw","address": "/hearingLossSim/main/band2/bandw","index": 392,"meta": [{ "style": "knob" }],"init": 63.2456,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band2_level","address": "/hearingLossSim/main/band2/level","index": 384,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band3","items": [ {"type": "vslider","label": "frequency","shortname": "band3_frequency","address": "/hearingLossSim/main/band3/frequency","index": 376,"meta": [{ "0": "" },{ "style": "knob" }],"init": 1000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band3_bandw","address": "/hearingLossSim/main/band3/bandw","index": 380,"meta": [{ "style": "knob" }],"init": 89.4427,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band3_level","address": "/hearingLossSim/main/band3/level","index": 372,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band4","items": [ {"type": "vslider","label": "frequency","shortname": "band4_frequency","address": "/hearingLossSim/main/band4/frequency","index": 364,"meta": [{ "0": "" },{ "style": "knob" }],"init": 2000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band4_bandw","address": "/hearingLossSim/main/band4/bandw","index": 368,"meta": [{ "style": "knob" }],"init": 126.491,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band4_level","address": "/hearingLossSim/main/band4/level","index": 360,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band5","items": [ {"type": "vslider","label": "frequency","shortname": "band5_frequency","address": "/hearingLossSim/main/band5/frequency","index": 352,"meta": [{ "0": "" },{ "style": "knob" }],"init": 3000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band5_bandw","address": "/hearingLossSim/main/band5/bandw","index": 356,"meta": [{ "style": "knob" }],"init": 154.919,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band5_level","address": "/hearingLossSim/main/band5/level","index": 348,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band6","items": [ {"type": "vslider","label": "frequency","shortname": "band6_frequency","address": "/hearingLossSim/main/band6/frequency","index": 340,"meta": [{ "0": "" },{ "style": "knob" }],"init": 4000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band6_bandw","address": "/hearingLossSim/main/band6/bandw","index": 344,"meta": [{ "style": "knob" }],"init": 178.885,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band6_level","address": "/hearingLossSim/main/band6/level","index": 336,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band7","items": [ {"type": "vslider","label": "frequency","shortname": "band7_frequency","address": "/hearingLossSim/main/band7/frequency","index": 328,"meta": [{ "0": "" },{ "style": "knob" }],"init": 6000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band7_bandw","address": "/hearingLossSim/main/band7/bandw","index": 332,"meta": [{ "style": "knob" }],"init": 219.089,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band7_level","address": "/hearingLossSim/main/band7/level","index": 324,"init": 0,"min": -90,"max": 70,"step": 0.01}]},{"type": "vgroup","label": "band8","items": [ {"type": "vslider","label": "frequency","shortname": "band8_frequency","address": "/hearingLossSim/main/band8/frequency","index": 304,"meta": [{ "0": "" },{ "style": "knob" }],"init": 8000,"min": 50,"max": 20000,"step": 0.1},{"type": "vslider","label": "bandw","shortname": "band8_bandw","address": "/hearingLossSim/main/band8/bandw","index": 312,"meta": [{ "style": "knob" }],"init": 252.982,"min": 20,"max": 1000,"step": 0.1},{"type": "vslider","label": "level","shortname": "band8_level","address": "/hearingLossSim/main/band8/level","index": 300,"init": 0,"min": -90,"max": 70,"step": 0.01}]}]}]}]}';
}
/*
 faust2webaudio

 Primarily written by Myles Borins
 During the Spring 2013 offering of Music 420b with Julius Smith
 A bit during the Summer of 2013 with the help of Joshua Kit Clayton
 And finally a sprint during the late fall of 2013 to get everything working
 A Special thanks to Yann Orlarey and Stéphane Letz

 faust2webaudio is distributed under the terms the MIT or GPL2 Licenses.
 Choose the license that best suits your project. The text of the MIT and GPL
 licenses are at the root directory.

 Additional code: GRAME 2014-2019
*/

'use strict';

/**
 * @class FaustWasm2ScriptProcessor
 * @property {string} name - name of current DSP
 * @property {any[]} _log - event log
 * @property {string[]} node - ScriptProcessorNode
 * @property {boolean} debug - debug mode
 */
class FaustWasm2ScriptProcessor {

    /**
     * Creates an instance of FaustWasm2ScriptProcessor.
     * @param {string} dspName - dsp name
     * @param {{ debug: boolean, [key: string]: any }} options - compile options
     */
    constructor(dspName, options) {
        this.name = dspName;
        this._log = [];
        this.debug = false || (typeof options === "object" && options.debug);
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
    * Constructor of Monophonic Faust DSP
    *
    * @param {WebAssembly.Instance} dspInstance - the wasm instance
    * @param {AudioContext | webkitAudioContext} audioCtx - the Web Audio context
    * @param {number} bufferSize - the buffer_size in frames
    *
    * @returns {ScriptProcessorNode} a valid WebAudio ScriptProcessorNode object or null
    */
    getNode(dspInstance, audioCtx, bufferSize) {

        // JSON is as offset 0
        var HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
        this.json = this.heap2Str(HEAPU8);
        this.json_object = JSON.parse(this.json);

        let sp;
        const inputs = parseInt(this.json_object.inputs);
        const outputs = parseInt(this.json_object.outputs);
        try {
            sp = audioCtx.createScriptProcessor(bufferSize, inputs, outputs);
        } catch (e) {
            this.error("Error in createScriptProcessor: " + e);
            return null;
        }

        sp.output_handler = null;
        sp.ins = null;
        sp.outs = null;
        sp.compute_handler = null;

        sp.dspInChannnels = [];
        sp.dspOutChannnels = [];

        sp.fPitchwheelLabel = [];
        sp.fCtrlLabel = new Array(128).fill(null).map(() => []);

        sp.remap = (v, mn0, mx0, mn1, mx1) => (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;

        sp.numIn = inputs;
        sp.numOut = outputs;

        this.log(sp.numIn);
        this.log(sp.numOut);

        // Memory allocator
        sp.ptr_size = 4;
        sp.sample_size = 4;

        sp.factory = dspInstance.exports;
        sp.HEAP = dspInstance.exports.memory.buffer;
        sp.HEAP32 = new Int32Array(sp.HEAP);
        sp.HEAPF32 = new Float32Array(sp.HEAP);

        this.log(sp.HEAP);
        this.log(sp.HEAP32);
        this.log(sp.HEAPF32);

        // bargraph
        sp.outputs_timer = 5;
        sp.outputs_items = [];

        // input items
        sp.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        sp.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        sp.audio_heap_ptr_inputs = sp.audio_heap_ptr;
        sp.audio_heap_ptr_outputs = sp.audio_heap_ptr_inputs + sp.numIn * sp.ptr_size;

        // Setup buffer offset
        sp.audio_heap_inputs = sp.audio_heap_ptr_outputs + sp.numOut * sp.ptr_size;
        sp.audio_heap_outputs = sp.audio_heap_inputs + sp.numIn * bufferSize * sp.sample_size;

        // Start of DSP memory : DSP is placed first with index 0
        sp.dsp = 0;

        sp.pathTable = [];

        sp.update_outputs = () => {
            if (sp.outputs_items.length > 0 && sp.output_handler && sp.outputs_timer-- === 0) {
                sp.outputs_timer = 5;
                sp.outputs_items.forEach(item => sp.output_handler(item, sp.factory.getParamValue(sp.dsp, sp.pathTable[item])));
            }
        };

        sp.compute = e => {
            for (let i = 0; i < sp.numIn; i++) { // Read inputs
                const input = e.inputBuffer.getChannelData(i);
                const dspInput = sp.dspInChannnels[i];
                dspInput.set(input);
            }
            // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
            if (sp.compute_handler) sp.compute_handler(bufferSize);
            try {
                sp.factory.compute(sp.dsp, bufferSize, sp.ins, sp.outs); // Compute
            } catch (e) {
                console.log("ERROR in compute (" + e + ")");
            }
            sp.update_outputs(); // Update bargraph
            for (let i = 0; i < sp.numOut; i++) { // Write outputs
                const output = e.outputBuffer.getChannelData(i);
                const dspOutput = sp.dspOutChannnels[i];
                output.set(dspOutput);
            }
        };
        // JSON parsing
        sp.parse_ui = ui => ui.forEach(group => sp.parse_group(group));
        sp.parse_group = group => group.items ? sp.parse_items(group.items) : null;
        sp.parse_items = items => items.forEach(item => sp.parse_item(item));
        sp.parse_item = item => {
            if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
                sp.parse_items(item.items);
            } else if (item.type === "hbargraph" || item.type === "vbargraph") {
                // Keep bargraph adresses
                sp.outputs_items.push(item.address);
                sp.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button"
                || item.type === "checkbox" || item.type === "nentry") {
                // Keep inputs adresses
                sp.inputs_items.push(item.address);
                sp.pathTable[item.address] = parseInt(item.index);
                if (!item.meta) return;
                item.meta.forEach(meta => {
                    const midi = meta.midi;
                    if (!midi) return;
                    const strMidi = midi.trim();
                    if (strMidi === "pitchwheel") {
                        sp.fPitchwheelLabel.push({
                            path: item.address,
                            min: parseFloat(item.min),
                            max: parseFloat(item.max)
                        });
                    } else {
                        const matched = strMidi.match(/^ctrl\s(\d+)/);
                        if (!matched) return;
                        sp.fCtrlLabel[parseInt(matched[1])].push({
                            path: item.address,
                            min: parseFloat(item.min),
                            max: parseFloat(item.max)
                        });
                    }
                })
            }
        }
        sp.initAux = () => { // Setup web audio context
            this.log("buffer_size " + bufferSize);
            sp.onaudioprocess = sp.compute;
            if (sp.numIn > 0) {
                sp.ins = sp.audio_heap_ptr_inputs;
                for (let i = 0; i < sp.numIn; i++) {
                    sp.HEAP32[(sp.ins >> 2) + i] = sp.audio_heap_inputs + bufferSize * sp.sample_size * i;
                }
                // Prepare Ins buffer tables
                const dspInChans = sp.HEAP32.subarray(sp.ins >> 2, (sp.ins + sp.numIn * sp.ptr_size) >> 2);
                for (let i = 0; i < sp.numIn; i++) {
                    sp.dspInChannnels[i] = sp.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + bufferSize * sp.sample_size) >> 2);
                }
            }
            if (sp.numOut > 0) {
                sp.outs = sp.audio_heap_ptr_outputs;
                for (let i = 0; i < sp.numOut; i++) {
                    sp.HEAP32[(sp.outs >> 2) + i] = sp.audio_heap_outputs + bufferSize * sp.sample_size * i;
                }
                // Prepare Out buffer tables
                const dspOutChans = sp.HEAP32.subarray(sp.outs >> 2, (sp.outs + sp.numOut * sp.ptr_size) >> 2);
                for (let i = 0; i < sp.numOut; i++) {
                    sp.dspOutChannnels[i] = sp.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + bufferSize * sp.sample_size) >> 2);
                }
            }
            // Parse JSON UI part
            sp.parse_ui(this.json_object.ui);
            // Init DSP
            sp.factory.init(sp.dsp, audioCtx.sampleRate);
        }

        // Public API

        /**
         * Destroy the node, deallocate resources.
         */
        sp.destroy = () => { }

        sp.getSampleRate = () => audioCtx.sampleRate;   // Return current sample rate
        sp.getNumInputs = () => sp.numIn;               // Return instance number of audio inputs.
        sp.getNumOutputs = () => sp.numOut;             // Return instance number of audio outputs.    

        /**
        * Global init, doing the following initialization:
        * - static tables initialization
        * - call 'instanceInit': constants and instance state initialisation
        *
        * @param {number} sampleRate - the sampling rate in Hertz
        */
        sp.init = sampleRate => sp.factory.init(sp.dsp, sampleRate);

        /**
        * Init instance state.
        *
        * @param {number} sampleRate - the sampling rate in Hertz
        */
        sp.instanceInit = sampleRate => sp.factory.instanceInit(sp.dsp, sampleRate);

        /**
        * Init instance constant state.
        *
        * @param {number} sampleRate - the sampling rate in Hertz
        */
        sp.instanceConstants = sampleRate => sp.factory.instanceConstants(sp.dsp, sampleRate);

        /* Init default control parameters values. */
        sp.instanceResetUserInterface = () => sp.factory.instanceResetUserInterface(sp.dsp);

        /* Init instance state (delay lines...).*/
        sp.instanceClear = () => sp.factory.instanceClear(sp.dsp);

        /**
         * Trigger the Meta handler with instance specific calls to 'declare' (key, value) metadata.
         *
         * @param {{ declare: (string, any) => any }} handler - the Meta handler as a 'declare' function of type (key, value)
         */
        sp.metadata = handler => {
            if (this.json_object.meta) {
                this.json_object.meta.forEach(meta => handler.declare(Object.keys(meta)[0], Object.values(meta)[0]));
            }
        }

        /**
         * Setup a control output handler with a function of type (path, value)
         * to be used on each generated output value. This handler will be called
         * each audio cycle at the end of the 'compute' method.
         *
         * @param {{ declare: (string, any) => any }} handler - a function of type function(path, value)
         */
        sp.setOutputParamHandler = handler => sp.output_handler = handler;

        /**
         * Get the current output handler.
         */
        sp.getOutputParamHandler = () => sp.output_handler;

        /**
         * Control change
         *
         * @param {number} channel - the MIDI channel (0..15, not used for now)
         * @param {number} ctrl - the MIDI controller number (0..127)
         * @param {number} value - the MIDI controller value (0..127)
         */
        sp.ctrlChange = (channel, ctrl, value) => {
            if (!sp.fCtrlLabel[ctrl].length) return;
            sp.fCtrlLabel[ctrl].forEach(ctrl => {
                const path = ctrl.path;
                sp.setParamValue(path, sp.remap(value, 0, 127, ctrl.min, ctrl.max));
                if (sp.output_handler) sp.output_handler(path, sp.getParamValue(path));
            })
        }

        /**
         * PitchWeel
         *
         * @param {number} channel - the MIDI channel (0..15, not used for now)
         * @param {number} value - the MIDI controller value (0..16383)
         */
        sp.pitchWheel = (channel, wheel) => {
            sp.fPitchwheelLabel.forEach(pw => {
                sp.setParamValue(pw.path, sp.remap(wheel, 0, 16383, pw.min, pw.max));
                if (sp.output_handler) sp.output_handler(pw.path, sp.getParamValue(pw.path));
            });
        }

        /**
         * Set control value.
         *
         * @param {string} path - the path to the wanted control (retrieved using 'getParams' method)
         * @param {number} val - the float value for the wanted parameter
         */

        sp.setParamValue = (path, val) => sp.factory.setParamValue(sp.dsp, sp.pathTable[path], val);
        /**
         * Get control value.
         *
         * @param {string} path - the path to the wanted control (retrieved using 'getParams' method)
         *
         * @return {number} the float value
         */
        sp.getParamValue = path => sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);

        /**
         * Get the table of all input parameters paths.
         *
         * @return {object} the table of all input parameter paths.
         */
        sp.getParams = () => sp.inputs_items;

        /**
         * Get DSP JSON description with its UI and metadata.
         *
         * @return {string} DSP JSON description
         */
        sp.getJSON = () => this.json;

        // Init resulting DSP
        sp.initAux();
        return sp;
    }

    /**
    * Create a ScriptProcessorNode Web Audio object
    * by loading and compiling the Faust wasm file
    *
    * @param {AudioContext | webkitAudioContext} audioCtx - the Web Audio context
    * @param {number} bufferSize - the bufferSize in frames
    * @returns {Promise<ScriptProcessorNode>} a Promise for valid WebAudio ScriptProcessorNode object or null
    */
    async createDSP(audioCtx, bufferSize) {
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

        try {
            const dspFile = await fetch(this.name + ".wasm");
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.instantiate(dspBuffer, importObject);
            return this.getNode(dspModule.instance, audioCtx, bufferSize);
        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
        }
    }

    log(str) {
        this._log.push(str);
        if (this.debug) console.log(str);
    }

    error(str) {
        this._log.push(str);
        console.error(str);
    }
}

const dspName = "hearingLossSim";
const instance = new FaustWasm2ScriptProcessor(dspName);

// output to window or npm package module
if (typeof module === "undefined") {
    window[dspName] = instance;
} else {
    const exp = {};
    exp[dspName] = instance;
    module.exports = exp;
}

// Usage : hearingLossSim.createDSP(audioCtx, 1024).then(dsp => dsp.connect(audioCtx.destination));
