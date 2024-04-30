const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String,
    maxlength: 400,
    minlength: 1,
    required: true,
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions:[reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;