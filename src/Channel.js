import Debug from 'debug'
const debug = Debug('MIDI.js:src/Channel.js')

import MIDI from './MIDI'
import createAction from './createAction'

export default class Channel {
	constructor(channelID) {
		this.channelID = channelID
		Channel.onConstruct.trigger(this)
		debug('Channel %s, ready for action!', channelID)
	}

	noteOn(noteID, velocity, delay) {
		return MIDI.noteOn(this.channelID, noteID, velocity, delay)
	}

	noteOff(noteID, delay) {
		return MIDI.noteOff(this.channelID, noteID, delay)
	}
}

Channel.onConstruct = createAction()