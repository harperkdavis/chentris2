let MoveType;
(function(MoveType) {
    MoveType[MoveType["Move"] = 0] = "Move";
    MoveType[MoveType["Hold"] = 1] = "Hold";
    MoveType[MoveType["AddLine"] = 2] = "AddLine";
})(MoveType || (MoveType = {}));
let Direction;
(function(Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Drop"] = 3] = "Drop";
    Direction[Direction["RotateRight"] = 4] = "RotateRight";
    Direction[Direction["RotateLeft"] = 5] = "RotateLeft";
    Direction[Direction["Rotate180"] = 6] = "Rotate180";
})(Direction || (Direction = {}));

//# sourceMappingURL=index.2992d966.js.map
