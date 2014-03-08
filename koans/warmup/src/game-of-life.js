function isCellAliveInNextGeneration(isCellAlive, numberOfNeighbours) {
    var result = true;
    if (numberOfNeighbours > 3)
        result = false;

    return result;
}
