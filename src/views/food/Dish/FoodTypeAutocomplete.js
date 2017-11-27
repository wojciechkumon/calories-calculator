import Autocomplete from 'react-native-autocomplete-input';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {FoodTypesService} from '../../../service/FoodTypesService';

class FoodTypeAutocomplete extends PureComponent {

    static renderFoodType(foodType) {
        const {name, kcal} = foodType;
        return (
            <View>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.directorText}>{kcal} kcal</Text>
            </View>
        );
    }

    render() {
        const {inputValue, onChange} = this.props;
        const foodTypes = inputValue ? FoodTypesService.findFoodTypes(inputValue, 10) : [];
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

        return (
            <View style={styles.container}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={foodTypes.length === 1 && comp(inputValue, foodTypes[0].name) ? [] : foodTypes}
                    defaultValue={inputValue}
                    onChangeText={onChange}
                    placeholder="Enter food"
                    renderItem={({name}) => (
                        <TouchableOpacity onPress={() => onChange(name)}>
                            <Text style={styles.itemText}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.descriptionContainer}>
                    {foodTypes.length > 0 ? (
                        FoodTypeAutocomplete.renderFoodType(foodTypes[0])
                    ) : (
                        <Text style={styles.infoText}>
                            Enter food
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        width: '100%'
    },
    autocompleteContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
    descriptionContainer: {
        marginTop: 8
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    directorText: {
        color: 'grey',
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    }
});

FoodTypeAutocomplete.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FoodTypeAutocomplete;
